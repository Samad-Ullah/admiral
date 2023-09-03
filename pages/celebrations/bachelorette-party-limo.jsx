
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head"

import BacheloretteParty from "../../Components/Bachelorette Party/BacheloretteParty"
import axios from "axios"
import { URL } from "../../config/serverUrl";
import {NextSeo} from 'next-seo'
function BachelorettePartyPage(props) {
  const router = useRouter()
 
  return (
    <>
      
     <BacheloretteParty />
    </>
  );
}

export default BachelorettePartyPage;