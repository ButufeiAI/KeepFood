export class CreateTableAssignmentDto {
  userId: string; // ID du serveur
  tableIds: string[]; // IDs des tables à attribuer
  startDate?: string; // Date de début (optionnel)
  endDate?: string; // Date de fin (optionnel)
}

