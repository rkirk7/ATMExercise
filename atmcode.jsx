const Account = () => {

  const[depositState, setDepositState] = React.useState('');
  const [transactionState, setTransactionState] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  let status = `Account Balance $ ${totalState}`;

  const [accountState, setAccountState] = React.useState(0);
  const handleChange = event => {
  setTransactionState(Number(event.target.value));
  };
  const handleSubmit = () => {
    if (depositState === 'Deposit') {
      setTotalState(totalState + transactionState); 
      setTransactionState(Number(0));;
    }
    if (depositState === 'Withdrawal' && totalState >= transactionState) {
      setTotalState(totalState - transactionState);
      setTransactionState(Number(0));
    } 
    if (depositState === 'Withdrawal' && totalState < transactionState) alert('Insufficient Funds');
    event.preventDefault();
  };
const handleModeSelect = (e) => {
  if (depositState !== e.target.value) setDepositState(e.target.value);
}

  return (
    <label className="label huge">
      <h2 id="total">{status}</h2>
      <label align="center">Select an action below to continue</label>
      <div>
<select align="center" onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
<option id="no-selection" value=""></option>
<option id="deposit-selection" value="Deposit">Deposit</option>
<option id="withdrawal-selection" value="Withdrawal">Withdrawal</option>
</select>
</div>
{depositState !== '' && (  
  <>
 <input type="number" value={transactionState} onChange={handleChange}></input>
      <input type="submit" value="Submit" onClick={handleSubmit}></input>
      <h3 align="center" id="depositstate">{depositState}</h3>
      </>
)};
      </label>
     
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
