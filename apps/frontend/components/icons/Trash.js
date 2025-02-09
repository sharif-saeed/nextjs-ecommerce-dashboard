const TrashIcon = ({ className = "w-6 h-6" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
      >
        <path
          fillRule="evenodd"
          d="M9 3a1 1 0 011-1h4a1 1 0 011 1v1h5a1 1 0 011 1v1a1 1 0 01-1 1h-1l-1 13a2 2 0 01-2 2H5a2 2 0 01-2-2L2 6H1a1 1 0 01-1-1V4a1 1 0 011-1h5V3zm6 0h-4v1h4V3z"
          clipRule="evenodd"
        />
      </svg>
    );
  };
  
  export default TrashIcon;