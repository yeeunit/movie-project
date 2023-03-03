import React, { useState } from 'react'
import { formatQuery, QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.scss';


const fields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
];


const QueryBuilderPage = () => {

  const [query, setQuery] = useState({
    combinator: 'and',
    rules: [
      { field: 'firstName', operator: '=', value: 'Steve' },
      { field: 'lastName', operator: '=', value: 'Vai' },
    ],
  });
  console.log('query', query)
  // console.log('json', JSON.stringify(query))

  // formatQuery(query);

  return (
  <div className='query_builder'>
    
    <h2>Hutom DB</h2>
    <h4>React Query Builder</h4>

    <QueryBuilder
      fields={fields} 
      query={query} 
      onQueryChange={q => setQuery(q)} 
    />
    <div> SQL :  {formatQuery(query, { format: 'sql'})} </div>
    <div> JSON : {formatQuery(query, 'json')} </div>

  </div>
  )
}

export default QueryBuilderPage