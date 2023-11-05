import './Student.css'

function Student({ item }) {
  const { fullname, status, gender, score, id, email, phone, address, birthdate } = item;

  return (<tr className='student_info'>
    <td>{fullname}</td>
    <td>{status ? "active" : "inactive"}</td>
    <td>{gender}</td>
    <td>{score}</td>
    <td>{id}</td>
    <td className='email'>{email}</td>
    <td>{phone}</td>
    <td>{address}</td>
    <td>{birthdate}</td>
  </tr>)
}

export default Student;