import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';


export function usePaginate(arr, qty) {
  const { num } = useParams();
  const [pageContent, setPageContent] = useState([]);
  const [page, setPage] = useState(num || 1);

  function handleContent() {
    return arr.slice(qty * (page - 1), page * qty);
  }

  useEffect(() => {
    if (arr.length) setPageContent(handleContent());
  }, [arr])

  useEffect(() => {
    if (arr.length) setPageContent(handleContent());
  }, [page])

  useEffect(() => {
    setPage(+num || 1)
  }, [num])

  const linkablePage = (current, type, element) => {
    if (type === 'page') {
      return <NavLink to={`/api/${current}`} className={({ isActive }) => isActive ? 'customLink-active' : ''}>{current}</NavLink>
    }

    if (type === 'next') {
      return <Link to={`/api/${current}`}><span>{">"}</span></Link>
    }

    if (type === 'prev') {
      if (current) return <Link to={`/api/${current}`}><span>{"<"}</span></Link>
      return <span>{"<"}</span>
    }

    return element;
  }

  return {
    page,
    pageContent,
    setPage,
    linkablePage
  };
}