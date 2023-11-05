import './Table.css'
import Student from './Student/Student';
import chevron_icon from '../../../assets/chevron.svg'
import { memo } from 'react';

const Table = memo(({ setData, pageContent }) => {

  const sortDesc = () => {
    setData(prev => [...prev].sort((a, b) => b.score - a.score));
  }

  const sortAsc = () => {
    setData(prev => [...prev].sort((a, b) => a.score - b.score));
  }

  return (
    <section>
      <div className='students_table'>
        <table>
          <thead>
            <tr>
              <th>სტუდენტების სახელი და გვარი</th>
              <th>სტატუსი</th>
              <th>სქესი</th>
              <th className='score_th'>
                ქულები
                <div className='score_th_sorticons'>
                  <img src={chevron_icon} alt="sort by asc icon" onClick={sortDesc} />
                  <img src={chevron_icon} alt="sort by desc icon" onClick={sortAsc} />
                </div>
              </th>
              <th>პირადი ნომერი</th>
              <th>ელ.ფოსტა</th>
              <th>მობილური ნომერი</th>
              <th>მისამართი</th>
              <th>დაბადების თარიღი</th>
            </tr>
          </thead>
          <tbody>
            {pageContent.map(item => <Student item={item} key={item.id} />)}
          </tbody>
        </table>
      </div>
    </section>
  )
})

Table.displayName = 'Table';
export default Table;