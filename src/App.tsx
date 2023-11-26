import React, { useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counter-slice'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice'; 

function App() {
  const count = useAppSelector(state => state.counter.value)
  
  const [numDogs, setNumDogs] = useState(10)
  const { data, isFetching } = useFetchBreedsQuery(numDogs)

  const dispatch = useAppDispatch()

  function handleClick(){
    dispatch(amountAdded(3))
  }

  return (
    <div>
      <p>
        <button onClick={handleClick}>
          count is {count}
        </button>
      </p>

      <div>
        Number of dogs fetched: {data?.length}
        <select value={numDogs} onChange={e => setNumDogs(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(breed => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} width={250} style={{"objectFit": "cover"}} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
