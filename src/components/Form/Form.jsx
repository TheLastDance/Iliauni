import './Form.css'
import { useState } from 'react';
import { students } from '../../data/students';
import Pagination from 'rc-pagination';
import Navbar from '../Navbar/Navbar';
import Filters from './Filters/Filters';
import Table from './Table/Table';
import NotAuthentificated from '../../hocs/NotAuthentificated';
import { usePaginate } from '../../customHooks/usePaginate';

const Form = NotAuthentificated(() => {
  const paginationSize = 7;
  const [data, setData] = useState(students);
  const { page, pageContent, setPage, defineLastPage } = usePaginate(data, paginationSize, 'search');

  return (
    <>
      <Navbar />
      <main className='form_page'>
        <Filters setData={setData} page={page} setPage={setPage} />
        <Table setData={setData} pageContent={pageContent} />
        <section>
          {pageContent.length ? <div className='pagination_container'> <span onClick={() => setPage(1)} >{'<<'}</span> <Pagination
            current={page}
            pageSize={paginationSize}
            showTitle={false}
            total={data.length}
            onChange={(current) => setPage(current)}
            nextIcon={<span>{'>'}</span>}
            prevIcon={<span>{"<"}</span>}
          /> <span onClick={() => defineLastPage()}>{'>>'}</span> </div> : null}
        </section>
      </main>
    </>
  )
})

export default Form;