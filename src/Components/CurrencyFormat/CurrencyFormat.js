import React from "react";
import numeral from "numeral";

const CurrencyFormat =({amount})=>{
const fromatedAmount=numeral(amount).format("$0,0.00")
return <div>
    {fromatedAmount}
</div>
}

export default CurrencyFormat;