export const Button = ({ onClick, className, children }: { onClick: () => void; className: string; children: React.ReactNode; }) => <button
  className={`  font-bold py-2 px-4 rounded ${className}`}
  onClick={onClick}>
  {children}
</button>;
