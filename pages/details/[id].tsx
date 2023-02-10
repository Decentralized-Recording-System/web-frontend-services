import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Detail;
