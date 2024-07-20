import { FaRegEye } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GoFile } from "react-icons/go";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';




export default function Leads(){
  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', date: '2024-07-01', status: 'Read' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', date: '2024-07-02', status: 'Unread' },
    { id: 3, name: 'Sam Johnson', email: 'sam.johnson@example.com', date: '2024-07-03', status: 'Read' },
    { id: 4, name: 'Chris Lee', email: 'chris.lee@example.com', date: '2024-07-04', status: 'Unread' },
    { id: 5, name: 'Patricia Brown', email: 'patricia.brown@example.com', date: '2024-07-05' },
    { id: 6, name: 'Patricia Brown', email: 'patricia.brown@example.com', date: '2024-07-05' },
    { id: 7, name: 'Patricia Brown', email: 'patricia.brown@example.com', date: '2024-07-05' },
    { id: 8, name: 'Patricia Brown', email: 'patricia.brown@example.com', date: '2024-07-05' },
    { id: 9, name: 'Patricia Brown', email: 'patricia.brown@example.com', date: '2024-07-05' }
  ];

  const leads_number =[data.length] ;

  console.log(leads_number);
  return(
    <>
      <div className="leads-boxs">
        <div className="l-box">
          <span><FaRegEye /></span>
          <h4>43</h4>
          <p>Visite / mois</p>
        </div>
        <div className="l-box">
          <span><IoMailOutline /></span>
          <h4>12</h4>
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
          <th>Nom</th>
          <th>Email</th>
          <th>La date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.date}</td>
            <td className="l-btns"><span className="l-one"><GoFile /></span> <span className="l-two"><AiOutlineDelete /></span></td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="lead-num">Vous avez {leads_number} leads en total</p>
      </div>
    </>
  )
}