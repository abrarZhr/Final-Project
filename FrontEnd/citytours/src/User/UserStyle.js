/* .prof{
    background-image: url('../image/a92ba723ac5f756e55d61b9f7f611c5b.jpg');
    width: 500px;
    height: 530px;
    display: inline-block; 
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    position: fixed;
    margin: 50px;
 
}

.profail{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 200px;


}

.picprof{
    background-image: url('../image/undraw_profile_pic_ic5t.png');

} */


import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));