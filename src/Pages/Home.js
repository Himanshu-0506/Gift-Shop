import React, { useState } from 'react'
import { useDataContext } from '../DataContext';
import {useNavigate} from 'react-router-dom';
import Spinner from '../Component/Loader/Spinner';

export default function Home() {

  const navigate = useNavigate();

  const [Relation, setRelation] = useState('');

  const [Age, setAge] = useState("");
  const [Occasion, setOccasion] = useState("");
  const [Budget, setBudget] = useState("");
  const [Interests, setInterests] = useState("");

   const {setResponseData} = useDataContext();
   const [loading, setLoading] = useState('');

   async function handleSubmit (e) {
     setLoading(true);
     e.preventDefault();
     
     setTimeout(async () => {
      setResponseData([
        {
          title: "Product name",
          price: "10$",
          link: "www.google.com",
          thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          snippet: "Product snippet",
          old_price: "12$",
          second_hand_condition: 'New',
          rating: "4.5",
          store_rating: '4.8',
        },
        {
          title: "Product name",
          price: "10$",
          link: "www.google.com",
          thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          snippet: "Product snippet",
          old_price: "12$",
          second_hand_condition: 'New',
          rating: "4.5",
          store_rating: '4.8',
        },
        {
          title: "Product name",
          price: "10$",
          link: "www.google.com",
          thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          snippet: "Product snippet",
          old_price: "12$",
          second_hand_condition: 'New',
          rating: "4.5",
          store_rating: '4.8',
        },
        {
          title: "Product name",
          price: "10$",
          link: "www.google.com",
          thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          snippet: "Product snippet",
          old_price: "12$",
          second_hand_condition: 'New',
          rating: "4.5",
          store_rating: '4.8',
        },
        {
          title: "Product name",
          price: "10$",
          link: "www.google.com",
          thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          snippet: "Product snippet",
          old_price: "12$",
          second_hand_condition: 'New',
          rating: "4.5",
          store_rating: '4.8',
        },
        {
          title: "Product name",
          price: "10$",
          link: "www.google.com",
          thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          snippet: "Product snippet",
          old_price: "12$",
          second_hand_condition: 'New',
          rating: "4.5",
          store_rating: '4.8',
        },
        {
          title: "Product name",
          price: "10$",
          link: "www.google.com",
          thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          snippet: "Product snippet",
          old_price: "12$",
          second_hand_condition: 'New',
          rating: "4.5",
          store_rating: '4.8',
        },
        {
          title: "Product name",
          price: "10$",
          link: "www.google.com",
          thumbnail: "https://images.pexels.com/photos/3373740/pexels-photo-3373740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          snippet: "Product snippet",
          old_price: "12$",
          second_hand_condition: 'New',
          rating: "4.5",
          store_rating: '4.8',
        },
      ])
      navigate('/Gifts');
      
      setLoading(false); 
    }, 1000);
  };
     
    
  return (
    <div className='container'>
        <div className="container text-center main-heading">
        <h1 className="text-md-center mt-3">Gift Shop AI</h1>
        <div className="container text-md-center">
          <p className="font-light mt-2">GiftGenius transforms the way you approach gift-giving, making it an enjoyable and thoughtful experience. With its AI-powered recommendations, you'll never have to worry about finding the perfect gift again. Surprise your loved ones with gifts that truly resonate, courtesy of GiftGenius.</p>
          <p className="text-md-center">Get Started Now!</p>
        </div>
        </div>
      {loading ?
       (<Spinner/>) : 
       (
        <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
            <div className="col-md-6 ">
          <label htmlFor="validationDefault03" className="form-label">Relation</label>
          <input type="text" className="form-control" id="validationDefault03" required 
            value={Relation}
            onChange={(e)=>{
              setRelation(e.target.value)
            }}
          />
        </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-md-6 mt-3">
          <label htmlFor="validationDefault03" className="form-label">Age</label>
          <input type="number" className="form-control" id="validationDefault03" required value={Age}
            onChange={(e)=>{
              setAge(e.target.value)
            }}/>
        </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-md-6 mt-3">
          <label htmlFor="validationDefault03" className="form-label">Occasion</label>
          <input type="text" className="form-control" id="validationDefault03" required value={Occasion}
            onChange={(e)=>{
              setOccasion(e.target.value)
            }}/>
        </div>
            </div>
            <div className="row justify-content-center">
        <div className="col-md-6 mt-3">
          <label htmlFor="validationDefault03" className="form-label" style={{ color:"#000000"}}>Interests</label>
          <input type="text" className="form-control" id="validationDefault03" required value={Interests}
            onChange={(e)=>{
              setInterests(e.target.value)
            }}/>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 mt-3">
          <label htmlFor="validationDefault03" className="form-label" style={{ color: "#000000" }}>Budget</label>
          <input type="number" className="form-control" id="validationDefault03" required value={Budget}
            onChange={(e)=>{
              setBudget(e.target.value)
            }}/>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-2 my-3">
          <button type="submit" className="btn btn-primary" style={{}}>Search Gifts</button>
        </div>
      
      </div>
      </form>
      )}
      
    </div>
  )
    }
