import Loading from "components/Loading";

export default function View({ isLoading, error, children }) {
  if (isLoading) return <Loading fullHeight={false} />;
  if (error) return error;
  return children;
}
