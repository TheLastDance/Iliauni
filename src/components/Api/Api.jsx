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
  const paginationSize = 10;
  const { page, pageContent, setPage } = usePaginate(response, paginationSize, 'param');

  const fetchData = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setResponse(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  const linkablePage = (current, type, element) => {
    if (type === 'page') {
      return <NavLink to={`/api/${current}`} className={({ isActive }) => isActive ? 'customLink-active' : ''}>{current}</NavLink>
    }

    if (type === 'next') {
      return <Link to={`/api/${current}`}><span>{">"}</span></Link>
    }

    if (type === 'prev') {
      if (current) return <Link to={`/api/${current}`}><span>{"<"}</span></Link> // check to prevent go to page 0
      return <span>{"<"}</span>
    }

    return element;
  } // customisation of pagination

  return (
    <>
      <Navbar />
      <main>
        <section className='api_container'>
          <ul className='cards_list'>
            {pageContent.map(item => <Post item={item} key={item.id} ></Post>)}
          </ul>
          {pageContent.length ? <div className='pagination_container'>
            <Link to={`/api/${1}`}><span>{'<<'}</span></Link>
            <Pagination
              current={page}
              showTitle={false}
              total={response.length}
              onChange={(current) => setPage(current)}
              itemRender={linkablePage}
              pageSize={paginationSize}
            />
            <Link to={`/api/${Math.ceil(response.length / paginationSize)}`}><span>{'>>'}</span></Link>
          </div> : null}
        </section>
      </main>
    </>
  )
})

export default Api;