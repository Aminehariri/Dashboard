import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoFile } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import ReactPaginate from 'react-paginate';

export default function Leads() {
  const [currentPage, setCurrentPage] = useState(0);
  const leadsPerPage = 5; // Nombre de leads à afficher par page

  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', date: '2024-07-01', status: 'Read' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', date: '2024-07-02', status: 'Unread' },
    { id: 3, name: 'Sam Johnson', email: 'sam.johnson@example.com', date: '2024-07-03', status: 'Read' },
    { id: 4, name: 'Chris Lee', email: 'chris.lee@example.com', date: '2024-07-04', status: 'Unread' },
    { id: 5, name: 'Patricia Brown', email: 'patricia.brown@example.com', date: '2024-07-05', status: 'Read' },
    { id: 6, name: 'Michael Davis', email: 'michael.davis@example.com', date: '2024-07-06', status: 'Unread' },
    { id: 7, name: 'Linda Martinez', email: 'linda.martinez@example.com', date: '2024-07-07', status: 'Read' },
    { id: 8, name: 'James Wilson', email: 'james.wilson@example.com', date: '2024-07-08', status: 'Unread' },
    { id: 9, name: 'Mary Garcia', email: 'mary.garcia@example.com', date: '2024-07-09', status: 'Read' },
    { id: 10, name: 'David Anderson', email: 'david.anderson@example.com', date: '2024-07-10', status: 'Unread' },
    { id: 11, name: 'Jennifer Lee', email: 'jennifer.lee@example.com', date: '2024-07-11', status: 'Read' },
    { id: 12, name: 'William Brown', email: 'william.brown@example.com', date: '2024-07-12', status: 'Unread' },
    { id: 13, name: 'Elizabeth Harris', email: 'elizabeth.harris@example.com', date: '2024-07-13', status: 'Read' },
    { id: 14, name: 'Richard Clark', email: 'richard.clark@example.com', date: '2024-07-14', status: 'Unread' },
    { id: 15, name: 'Susan Lewis', email: 'susan.lewis@example.com', date: '2024-07-15', status: 'Read' },
    { id: 16, name: 'Daniel Walker', email: 'daniel.walker@example.com', date: '2024-07-16', status: 'Unread' },
    { id: 17, name: 'Nancy Young', email: 'nancy.young@example.com', date: '2024-07-17', status: 'Read' },
    { id: 18, name: 'Charles King', email: 'charles.king@example.com', date: '2024-07-18', status: 'Unread' },
    { id: 19, name: 'Margaret Scott', email: 'margaret.scott@example.com', date: '2024-07-19', status: 'Read' },
    { id: 20, name: 'Thomas Adams', email: 'thomas.adams@example.com', date: '2024-07-20', status: 'Unread' }
  ];
  

  const offset = currentPage * leadsPerPage;
  console.log(offset);
  // (offset === 0 ? {} :{});
 

  const currentLeads = data.slice(offset, offset + leadsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="leads-boxs">
        <div className="l-box">
          <span><FaRegEye /></span>
          <h4>43</h4>
          <p>Visite / mois</p>
        </div>
        <div className="l-box">
          <span><IoMailOutline /></span>
          <h4>{data.length}</h4>
          <p>Nouveau Lead</p>
        </div>
        <div className="l-box">
          <span><HiOutlineShoppingBag /></span>
          <h4>22</h4>
          <p>Vente /mois</p>
        </div>
        <div className="l-box">
          <span><HiOutlineShoppingBag /></span>
          <h4>22</h4>
          <p>Vente /mois</p>
        </div>
      </div>
      <div className="leads-nav">
        <ul>
          <li><a href="#">Tout</a></li>
          <li><a href="#">Nouveau</a></li>
          <li><a href="#">Modifier</a></li>
          <li><a href="#">Supprumer</a></li>
        </ul>
      </div>
      <div className="leads-table">
        <table>
          <thead>
            <tr>
              <th>Numero</th>
              <th>Nom</th>
              <th>Email</th>
              <th>La date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentLeads.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.date}</td>
                <td className="l-btns"><span className="l-one"><GoFile /></span> <span className="l-two"><AiOutlineDelete /></span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="lead-num">Vous avez {data.length} leads en total</p>
        <ReactPaginate
          previousLabel={'Précédent'}
          nextLabel={'Suivant'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(data.length / leadsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={8}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
        
      </div>
    </>
  );
}
