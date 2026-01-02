import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  title?: string;
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
  return (
   <div className="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
  <div className="flex-grow-1">
    {title && <h4 className="fs-18 fw-semibold mb-0">{title}</h4>}
  </div>
  <div className="text-end">
    <nav aria-label="Breadcrumb navigation">
      <ol className="breadcrumb m-0 py-0">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li
              key={item.label + idx}
              className={`breadcrumb-item${isLast ? " active" : ""}`}
              aria-current={isLast ? "page" : undefined}
            >
              {isLast || !item.href ? (
                <span>{item.label}</span>
              ) : (
                <Link to={item.href} aria-label={`Navigate to ${item.label}`}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  </div>
</div>

  );
};

export default Breadcrumb;
