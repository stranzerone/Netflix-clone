import React from 'react';
import TredingCar from './TredingCar';

const items = [
  { imageUrl: 'https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABexK7lkxjCD4TkkHmZMsTQqy0MB3fYd9---mVz1qwC8ekvYRPpScegHzrTWCAuSvcaXQMVIDDkW_PAJAGd9Mw4Eb-45uo0oHvuSFP7u5JSCbcSqENWdS3VzqzeaPD10TXnY-.jpg?r=e07', label: '1' },
  { imageUrl: 'https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeDVybeKwQL37__gX5R3ZJNvXXXwPrg2NpWG3veHY24wodSN8Nunzsattz7vPKJEcu5slVd1FQ-Xwv_SBDtiyW-Jjmr1_Fv3gZs.jpg?r=2b9', label: '2' },
  { imageUrl: 'https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUQdyn-frdzffPaBYu66wu80a-6xvDcixL38MSsdCK8VDos7g88J22YBSzHeG7PSxeexq9IrrOgZggtZrt7lJdfYHoeqfMrssZc.jpg?r=a57', label: '3' },
  { imageUrl: 'https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZlXzhlY-1K0vxyj1b747UDxfWDgl1fPD3Lv1ZNgctd-gxWFtTI3s0pkyoilVz0FBwyg7S96IsY7M84RgyT0opi0IAzY9OZghxo.jpg?r=982', label: '4' },
  { imageUrl: 'https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABS_Vr6yRYSb-VsqrFStm4pNxkiAO8Vt5OrnUjtjeEIUssiKB_0k2V7lXpaL8P9s8YAFUGm7rYaSpn6XqFgzuAdTS3n0DJKoKWR4.jpg?r=8c7', label: '5' },
  { imageUrl: 'https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTK0gJneVahAm2QxuuF8CjXm3Zcp1_59O0tQyP_17isUL-L4mEEnlyaF98hMWqtEuVuIW0B1jwxbk3FmtYR1K0wIW9USBLEWUK__7UEa4fnU7bmPpMzDxmccnxTmcFObthec.jpg?r=71f', label: '6' },
  { imageUrl: 'https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZKSQlWiOXROsDc5WrrCwy_KaFzgbhhqJXzuRfXC1p-ZiQaCs8w7ReykVtZRr9SbPTQZet32lT2ZO2X9CuNaXdZA0pYCYl2UzDA8VgbMa7eVeGOtuQU7Y41tCpD6k9UfduE5.jpg?r=e73', label: '7' },
  { imageUrl: 'https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABT3Y5V3zz5kE-S4WTkQyS55ySfYvtCrXcYhiX69o3oTCix3k9hep-fqa2O96_H1n4-zeK5ILXvU2Z7IUR3rFCHSt2oW_aNaT9JI.jpg?r=0f6', label: '8' },
  { imageUrl: 'https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQbzfZQJyPkqN-k46hsuBC1BrmY2LVlU4_Bcw51uDKMEN4i29Ww4_A-MzeYelMF7a-A-EaXKBGri-UyIjlifqSKObmUvXmSwxp4.jpg?r=23c', label: '9' },
  { imageUrl: 'https://occ-0-7161-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRb5Wfh1k95XK2yC6IyPMClwOX6Fu953iRLZP5bLbM7VffyyEVvuFMr1Ne-s8Ug9Cv0-vXHA4lQJ96hcHT0I0lv9sCM7NHex6euY87RVlVekbkRNCsoHT-YzE0DbfhuY0JhH.jpg?r=ead', label: '10' },
 
];

const TrendingCards = () => {
  return (
    <div >
      <h1 className='text-[1.5rem] ms-[10vw] mt-9 font-bold text-2xl font-sans '>Trending Now</h1>
      <TredingCar items={items} />
    </div>
  );
};

export default TrendingCards;
