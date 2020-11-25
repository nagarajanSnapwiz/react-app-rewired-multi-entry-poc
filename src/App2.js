import _ from 'lodash';

import React  from 'react';

export default function Index2(){
    const sum = _.chain(_.range(0,10)).filter(x => x % 2).reduce((a,c)=> a+c).value();
    return (<div>
        <h1>index 2 page</h1>
        <h2>sum is {sum}</h2>
    </div>)
}