import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '../../../utils/firebase.config'
import { createUserWithEmailAndPassword } from 'firebase/auth';
const initialState = {
  // name: 'Mir Hussain',
  // email: 'mir@gmail.com',
  name: '',
  email: '',
  isLoading:true,
  isError:false,
  error:'',
};

// user create korbo
export const createUser= createAsyncThunk(
  'userSlice/createUser', 
  async ({email, password}) => {
  const data = await createUserWithEmailAndPassword(auth , email, password)
console.log(data)
  return;
}
);










const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
