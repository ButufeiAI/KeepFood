import React from "react";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  path?: string;
  active?: boolean;
};

type CommonPageHeaderProps = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
};

const CommonUiPageHeader: React.FC<CommonPageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <div className="mb-4">
      <h4 className="mb-1">{title}</h4>
      <nav aria-label="Breadcrumb navigation">
        <ol className="breadcrumb mb-0 p-0">
          {breadcrumbs.map((item, index) => (
            <li
              key={index}
              className={`breadcrumb-item ${item.active ? "active" : ""}`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.path && !item.active ? (
                <Link to={item.path} aria-label={`Navigate to ${item.label}`}>{item.label}</Link>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default CommonUiPageHeader;
