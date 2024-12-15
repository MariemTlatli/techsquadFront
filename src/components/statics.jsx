import React, { Component } from 'react'
import * as React from "react";

import { FaCartArrowDown, FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { BsFillCartCheckFill, BsCartFill } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";
import { useState, useEffect } from "react";


function Statics() {
    return (
      <div style={{padding:"10px"}}>
         <div className="stataticone">
          <div className="componentone">
            <FaUser size="4em" />
            <span className="s1">{users.length}</span>
            <span className="s2">users</span>
          </div>
          <div className="componentone">
            <RiShoppingBagFill size="4em" />
            <span className="s1">{products.length}</span>
            <span className="s2">Products</span>
          </div>
          <div className="componentone">
            <BsFillCartCheckFill size="4em" />
            <span className="s1">2500</span>
            <span className="s2">Welcome</span>
          </div>
          <div className="componentone">
            <BsCartFill size="4em" />
            <span className="s1">{orders.length}</span>
            <span className="s2">orders</span>
          </div>
        </div>
      </div>
    )
  
}

export default Statics
