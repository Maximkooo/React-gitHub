import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    console.log(searchParams.get('playerOneName'), searchParams.get('playerTwoName'));
  },[location])

  return(
    <h2>Results</h2>
  )
}
export default Results;