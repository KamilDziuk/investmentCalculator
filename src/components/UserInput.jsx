export default function UserInput({
  setInitialInvestment,
  setAnnualInvestment,
  setExpectedReturn,
  setDuration,
}) {
  return (

      <section id="user-input">
        <div className="input-group">
          <label>
            Initial Investment
            <p>
              <input
                type="number"
                placeholder="10000"
                onChange={(e) => setInitialInvestment(e.target.value)}
              />
            </p>
          </label>

          <label>
            Annual Investment
            <p>
              <input
                type="number"
                placeholder="1200"
                onChange={(e) => setAnnualInvestment(e.target.value)}
              />
            </p>
          </label>
        </div>
        <div className="input-group">
          <label>
            Expected Return
            <p>
              <input
                type="number"
                placeholder="6"
                onChange={(e) => setExpectedReturn(e.target.value)}
              />
            </p>
          </label>

          <label>
            Duration
            <p>
              <input
                type="number"
                placeholder="10"
                onChange={(e) => setDuration(e.target.value)}
              />
            </p>
          </label>
        </div>
      </section>
    
  );
}
