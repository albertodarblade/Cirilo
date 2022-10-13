export default function View({ isLoading, error, children }) {
  if (isLoading) return "...loading";
  if (error) return error;
  return children;
}
