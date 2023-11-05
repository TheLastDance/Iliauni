import './Api.css'
import Navbar from '../Navbar/Navbar';
import Post from './Post/Post';
import { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';
import { usePaginate } from '../../customHooks/usePaginate';
import NotAuthentificated from '../../hocs/NotAuthentificated';
import { Link, NavLink } from 'react-router-dom';

const Api = NotAuthentificated(() => {
  const [response, setResponse] = useState([]);
  const { page, pageContent, setPage } = usePaginate(response, 10, 'param');

  const fetchData = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => fetchData, []);

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

  console.log("render api");

  return (
    <>
      <Navbar />
      <main>
        <section className='api_container'>
          <ul className='cards_list'>
            {pageContent.map(item => <Post item={item} key={item.id} ></Post>)}
          </ul>
          {pageContent.length ? <Pagination
            current={page}
            showTitle={false}
            total={response.length}
            onChange={(current) => setPage(current)}
            itemRender={linkablePage}
          /> : null}
        </section>
      </main>
    </>
  )
})

export default Api;