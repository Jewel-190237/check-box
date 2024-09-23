
const [checked, setChecked] = useState(false);
<Checkbox className='description mt-6' onChange={e => setChecked(e.target.checked)}>Remember Me?</Checkbox>
