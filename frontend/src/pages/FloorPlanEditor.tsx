import React, { useState, useRef, useEffect } from 'react';
import { useAuthStore } from '../stores/auth.store';
import { tablesService, Table } from '../services/tables.service';

interface Point {
  x: number;
  y: number;
}

interface Wall {
  id: string;
  start: Point;
  end: Point;
}

interface TablePosition extends Table {
  x: number;
  y: number;
}

export function FloorPlanEditor() {
  const { user } = useAuthStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [walls, setWalls] = useState<Wall[]>([]);
  const [tables, setTables] = useState<TablePosition[]>([]);
  const [allTables, setAllTables] = useState<Table[]>([]);
  const [mode, setMode] = useState<'draw' | 'place' | 'move' | 'select' | 'delete'>('select');
  const [drawingWall, setDrawingWall] = useState<Point | null>(null);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [draggingTable, setDraggingTable] = useState<TablePosition | null>(null);
  const [gridSize] = useState(20);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });

  useEffect(() => {
    loadTables();
    loadFloorPlan();
  }, []);

  const loadTables = async () => {
    try {
      const data = await tablesService.getAll(user?.restaurantId);
      setAllTables(data);
    } catch (error) {
      console.error('Erreur chargement tables:', error);
    }
  };

  const loadFloorPlan = async () => {
    // TODO: Charger le plan depuis la DB
    // Plan vide par défaut
    setWalls([]);
    setTables([]);
  };

  const saveFloorPlan = async () => {
    // TODO: Sauvegarder dans la DB
    alert('Plan sauvegardé ! (Implémentation DB à venir)');
  };

  useEffect(() => {
    drawCanvas();
  }, [walls, tables, gridSize, scale, offset, mode]);

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grille
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Murs
    ctx.strokeStyle = '#212529';
    ctx.lineWidth = 4;
    walls.forEach(wall => {
      ctx.beginPath();
      ctx.moveTo(wall.start.x, wall.start.y);
      ctx.lineTo(wall.end.x, wall.end.y);
      ctx.stroke();
      
      // Indicateur de sélection pour suppression
      if (mode === 'delete') {
        const midX = (wall.start.x + wall.end.x) / 2;
        const midY = (wall.start.y + wall.end.y) / 2;
        ctx.fillStyle = '#dc3545';
        ctx.beginPath();
        ctx.arc(midX, midY, 8, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Mur en cours de dessin
    if (drawingWall && mode === 'draw') {
      ctx.strokeStyle = '#007bff';
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(drawingWall.x, drawingWall.y);
      const mousePos = getMousePos(canvas);
      if (mousePos) {
        ctx.lineTo(mousePos.x, mousePos.y);
      }
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Tables
    tables.forEach(table => {
      const size = 60;
      ctx.fillStyle = table.isActive ? '#28a745' : '#6c757d';
      ctx.fillRect(table.x - size / 2, table.y - size / 2, size, size);
      
      // Bordure rouge en mode suppression
      if (mode === 'delete') {
        ctx.strokeStyle = '#dc3545';
        ctx.lineWidth = 3;
        ctx.strokeRect(table.x - size / 2, table.y - size / 2, size, size);
      }
      
      ctx.fillStyle = 'white';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(table.name, table.x, table.y - 10);
      ctx.font = '12px Arial';
      ctx.fillText(`${table.capacity} pers`, table.x, table.y + 10);
    });
  };

  const getMousePos = (canvas: HTMLCanvasElement): Point | null => {
    const rect = canvas.getBoundingClientRect();
    const e = (window as any).currentMouseEvent;
    if (!e) return null;
    return {
      x: Math.round((e.clientX - rect.left) / gridSize) * gridSize,
      y: Math.round((e.clientY - rect.top) / gridSize) * gridSize
    };
  };

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    (window as any).currentMouseEvent = e.nativeEvent;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const pos = getMousePos(canvas);
    if (!pos) return;

    if (mode === 'draw') {
      if (!drawingWall) {
        setDrawingWall(pos);
      } else {
        const newWall: Wall = {
          id: Date.now().toString(),
          start: drawingWall,
          end: pos
        };
        setWalls([...walls, newWall]);
        setDrawingWall(null);
      }
    } else if (mode === 'place' && selectedTable) {
      const newTablePos: TablePosition = {
        ...selectedTable,
        x: pos.x,
        y: pos.y
      };
      setTables([...tables, newTablePos]);
      setSelectedTable(null);
      setMode('select');
    } else if (mode === 'move') {
      const clicked = tables.find(t => 
        Math.abs(t.x - pos.x) < 30 && Math.abs(t.y - pos.y) < 30
      );
      if (clicked) {
        setDraggingTable(clicked);
      }
    } else if (mode === 'delete') {
      // Supprimer un mur
      const clickedWall = walls.find(wall => {
        const dx = wall.end.x - wall.start.x;
        const dy = wall.end.y - wall.start.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const midX = (wall.start.x + wall.end.x) / 2;
        const midY = (wall.start.y + wall.end.y) / 2;
        const distToMid = Math.sqrt((pos.x - midX) ** 2 + (pos.y - midY) ** 2);
        return distToMid < 30;
      });
      if (clickedWall) {
        setWalls(walls.filter(w => w.id !== clickedWall.id));
        return;
      }
      
      // Supprimer une table
      const clickedTable = tables.find(t => 
        Math.abs(t.x - pos.x) < 30 && Math.abs(t.y - pos.y) < 30
      );
      if (clickedTable) {
        setTables(tables.filter(t => t.id !== clickedTable.id));
      }
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    (window as any).currentMouseEvent = e.nativeEvent;
    if (mode === 'draw' && drawingWall) {
      drawCanvas();
    } else if (mode === 'move' && draggingTable) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const pos = getMousePos(canvas);
      if (pos) {
        setTables(tables.map(t => 
          t.id === draggingTable.id ? { ...t, x: pos.x, y: pos.y } : t
        ));
      }
    }
  };

  const handleCanvasMouseUp = () => {
    setDraggingTable(null);
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Toolbar */}
      <div style={{
        backgroundColor: 'white',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: '600' }}>Mode:</h3>
        <button
          onClick={() => setMode('select')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: mode === 'select' ? '#007bff' : '#f8f9fa',
            color: mode === 'select' ? 'white' : '#212529',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          👆 Sélectionner
        </button>
        <button
          onClick={() => setMode('draw')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: mode === 'draw' ? '#007bff' : '#f8f9fa',
            color: mode === 'draw' ? 'white' : '#212529',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          ✏️ Dessiner murs
        </button>
        <button
          onClick={() => setMode('move')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: mode === 'move' ? '#007bff' : '#f8f9fa',
            color: mode === 'move' ? 'white' : '#212529',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          🚚 Déplacer tables
        </button>
        <button
          onClick={() => setMode('delete')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: mode === 'delete' ? '#dc3545' : '#f8f9fa',
            color: mode === 'delete' ? 'white' : '#212529',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          🗑️ Supprimer
        </button>
        <div style={{ flex: 1 }}></div>
        <button
          onClick={() => {
            if (confirm('Êtes-vous sûr de vouloir effacer tout le plan ?')) {
              setWalls([]);
              setTables([]);
            }
          }}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          🗑️ Effacer tout
        </button>
        <button
          onClick={saveFloorPlan}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          💾 Sauvegarder le plan
        </button>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
        {/* Sidebar - Liste des tables */}
        <div style={{
          width: '280px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          padding: '1rem',
          overflowY: 'auto'
        }}>
          <h3 style={{ marginTop: 0, fontSize: '1rem', fontWeight: '600' }}>Tables disponibles</h3>
          <p style={{ fontSize: '0.875rem', color: '#6c757d', marginBottom: '1rem' }}>
            Cliquez sur une table puis sur le plan pour la placer
          </p>
          {allTables.map(table => (
            <button
              key={table.id}
              onClick={() => {
                setSelectedTable(table);
                setMode('place');
              }}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginBottom: '0.5rem',
                backgroundColor: selectedTable?.id === table.id ? '#e7f3ff' : '#f8f9fa',
                border: selectedTable?.id === table.id ? '2px solid #007bff' : '1px solid #dee2e6',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: '500'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>🪑 {table.name}</span>
                <span style={{ color: '#6c757d', fontSize: '0.875rem' }}>{table.capacity} pers</span>
              </div>
              {table.zone && (
                <div style={{ fontSize: '0.75rem', color: '#6c757d', marginTop: '0.25rem' }}>
                  Zone: {table.zone}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Canvas principal */}
        <div style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          padding: '1rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <canvas
            ref={canvasRef}
            width={1200}
            height={800}
            onMouseDown={handleCanvasMouseDown}
            onMouseMove={handleCanvasMouseMove}
            onMouseUp={handleCanvasMouseUp}
            style={{
              cursor: mode === 'draw' ? 'crosshair' : mode === 'move' ? 'move' : mode === 'delete' ? 'not-allowed' : 'default',
              border: '1px solid #dee2e6',
              borderRadius: '8px'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            fontSize: '0.875rem'
          }}>
            {mode === 'draw' && drawingWall && '📍 Cliquez pour terminer le mur'}
            {mode === 'draw' && !drawingWall && '✏️ Cliquez pour commencer un mur'}
            {mode === 'place' && selectedTable && '📍 Cliquez pour placer la table'}
            {mode === 'move' && '🚚 Cliquez et glissez une table'}
            {mode === 'delete' && '🗑️ Cliquez sur un mur ou une table pour supprimer'}
            {mode === 'select' && '👆 Sélectionnez un mode'}
          </div>
        </div>
      </div>
    </div>
  );
}
