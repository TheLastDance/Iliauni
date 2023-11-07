import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

// first arg array of objects for our pagination, second is quantity of items at one page, third is querying arg (searchparams or useparams) by default it has none value.
export function usePaginate(arr, qty, queryParam = 'none') {
  const { num } = useParams(); // need if we want to save page number in the link as parameter
  const [searchParams] = useSearchParams(); // need if we want to save page number as search parameter
  const [pageContent, setPageContent] = useState([]);
  const [page, setPage] = useState(Math.abs(+searchParams.get('page')) || Math.abs(+num) || 1); // need Math.abs to prevent negative numbers in params

  const handleContent = useMemo(() => arr.slice(qty * (page - 1), page * qty), [page, arr]) // returns array of objects which should be shown on specific page

  useEffect(() => {
    setPageContent(handleContent);
    if (queryParam === 'search' && arr.length && !handleContent.length) setPage(1);
    if (queryParam === 'param' && arr.length && !handleContent.length) setPage(1); // if such pages doesn't exist, change it to first page
  }, [arr])

  useEffect(() => {
    setPageContent(handleContent);
  }, [page]) // if page was changed, recalculate array which should be shown

  useEffect(() => {
    if (queryParam === 'param' && !(arr.length && !handleContent.length)) setPage(Math.abs(+num) || 1);
  }, [num])

  // Listen for hash changes and reload the page. Need only to fix some problems in prod with hashRouter configuration. You don't need this part when using BrowserRouter.
  // Now if we will change serchParams or params inside our url, after refresh, app will immediately render screen with logic of new params.
  useEffect(() => {
    window.addEventListener('hashchange', () => window.location.reload());

    return () => {
      window.removeEventListener('hashchange', () => window.location.reload());
    };
  }, []);

  return {
    page,
    pageContent,
    setPage
  };
}