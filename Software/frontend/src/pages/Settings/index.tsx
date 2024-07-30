import './style.css';

export function Settings() {
  return (
    <div class="settings">
      <h3>Settings</h3>

      <form>
        <fieldset>
          <label>
            Battery capacity (in Wh)
            <fieldset role="group">
              <input name="capacity" type="number" value="30000" autocomplete="in Wh" aria-describedby="weightUnit" />
              <button disabled>Wh</button>
            </fieldset>
          </label>

          <label>
            <legend>
              Rescale SOC
            </legend>

            <input name="capacity" type="checkbox" role="switch" checked />
            Enabled
          </label>

          <label>
            SOC max percentage
            <fieldset role="group">
              <input name="soc_max" type="number" value="80" min="0" max="100" minLength={0} maxLength={100} />
              <button disabled>%</button>
            </fieldset>
          </label>

          <label>
            SOC min percentage
            <fieldset role="group">
              <input name="soc_min" type="number" value="20" min="0" max="100" minLength={0} maxLength={100} />
              <button disabled>%</button>
            </fieldset>
          </label>

          <label>
            Max charge speed
            <fieldset role="group">
              <input name="max_charge" type="number" value="30" min="0" max="100" minLength={0} maxLength={100} />
              <button disabled>A</button>
            </fieldset>
          </label>

          <label>
            Max discharge speed
            <fieldset role="group">
              <input name="max_discharge" type="number" value="30" min="0" max="100" minLength={0} maxLength={100} />
              <button disabled>A</button>
            </fieldset>
          </label>

          <input type="submit" value="Save" />
        </fieldset>
      </form>
    </div>
  );
}
