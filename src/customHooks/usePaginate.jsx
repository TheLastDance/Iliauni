import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

// first arg array of objects for our pagination, second is quantity of items at one page, third is querying arg (searchparams or useparams) by default it has none value.
export function usePaginate(arr, qty, queryParam = 'none') {
  const { num } = useParams(); // need if we want to save page number in the link as parameter
  const [searchParams] = useSearchParams(); // need if we want to save page number as search parameter
  const [pageContent, setPageContent] = useState([]);
  const [page, setPage] = useState(+searchParams.get('page') || num || 1);

  const handleContent = useMemo(() => arr.slice(qty * (page - 1), page * qty), [page, arr]) // returns array of objects which should be shown

  useEffect(() => {
    setPageContent(handleContent);
    if (queryParam === 'search' && arr.length && !handleContent.length) setPage(1);
    if (queryParam === 'param' && arr.length && !handleContent.length) setPage(1); // if such pages doesn't exist, change it to first page
  }, [arr])

  useEffect(() => {
    setPageContent(handleContent);
  }, [page])

  useEffect(() => {
    if (queryParam === 'param' && !(arr.length && !handleContent.length)) setPage(+num || 1);
  }, [num])

  console.log(arr);

  return {
    page,
    pageContent,
    setPage
  };
}