import './Filters.css'
import { useEffect, useState, useLayoutEffect } from 'react';
import { useToggle } from '../../../customHooks/useToggle';
import { students } from '../../../data/students';
import filter_icon from '../../../assets/filter_icon.svg';
import search_icon from '../../../assets/search_icon.svg';
import chevron from '../../../assets/chevron.svg';
import DropDownHoc from '../../../hocs/DropDownHoc';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

const Filters = memo(({ setData, page, setPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterToggle, setFilterToggle] = useToggle();
  const [filters, setFilters] = useState({
    active: handleSearchParam('active'),
    inactive: handleSearchParam('inactive'),
    male: handleSearchParam('male'),
    female: handleSearchParam('female')
  });

  function handleSearchParam(state) {
    return searchParams.has(state) ? searchParams.get(state) === 'true' : true
  }

  const handleFilters = (prop) => {
    setFilters(prev => ({ ...prev, [prop]: !prev[prop] }));
    setPage(1) // show first page of pagination
  }

  useLayoutEffect(() => {
    const filteredStudents =
      students
        .filter(item => filters.active && filters.inactive ? true : filters.active ? item.status === filters.active : filters.inactive ? item.status === !filters.inactive : false)
        .filter(item => filters.male && filters.female ? true : filters.male ? item.gender === "male" : filters.female ? item.gender === "female" : false);

    setSearchParams({ ...filters, page });
    setData(filteredStudents);
  }, [filters]);
  // decide to try layoutEffect here, to fire filtering table before first repaint, user will not see initial data and will see filtered data immediately
  // we always can switch to useEffect if perfomance will not be great.

  useEffect(() => {
    setSearchParams({ ...filters, page });
  }, [page])

  return (
    <section className='filters'>
      <div className='filters_buttons'>
        <button type='button' onClick={setFilterToggle} >
          <img src={filter_icon} alt="filter icon" />
          filter
        </button>
        <label className='search_label'>
          <img src={search_icon} alt="search icon" />
          <input type="search" />
        </label>
      </div>
      <div className={filterToggle ? 'filter_popup filter_popup_active' : 'filter_popup'}>
        <DropDownHoc name={'სტუდენტის სტატუსი'} icon={chevron}>
          <label>
            <input type="checkbox" checked={filters.active} name='active' onChange={() => handleFilters('active')} />
            Active
          </label>
          <label>
            <input type="checkbox" checked={filters.inactive} name='inactive' onChange={() => handleFilters('inactive')} />
            Inactive
          </label>
        </DropDownHoc>
        <DropDownHoc name={'სქესი'} icon={chevron}>
          <label>
            <input type="checkbox" checked={filters.male} name='male' onChange={() => handleFilters('male')} />
            Male
          </label>
          <label>
            <input type="checkbox" checked={filters.female} name='female' onChange={() => handleFilters('female')} />
            Female
          </label>
        </DropDownHoc>
      </div>

    </section>
  )
})

Filters.displayName = 'Filters';
export default Filters;