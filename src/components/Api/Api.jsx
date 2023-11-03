import './Api.css'
import Navbar from '../Navbar/Navbar';
import Post from './Post/Post';
import { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';
import { usePaginate } from '../../customHooks/usePaginate';

function Api() {
  const [response, setResponse] = useState([]);
  const { page, pageContent, setPage, linkablePage } = usePaginate(response, 10);

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
}

export default Api;