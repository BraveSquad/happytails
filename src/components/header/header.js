import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import '../../assets/style/header.css'

export default function Header() {

  return (
    <Box className='headerBox' maxWidth='l' sx={{ p: 2, borderRadius: '7px ' }}>
      <Link fontSize={'40px'} href="/" underline="hover" sx={{ color: 'grey' }} >
        HappyTails
      </Link>
      <Link href="/log" underline="hover" sx={{ color: 'grey', display: 'flex', alignItems: 'center' }}>
        Logout
      </Link>
      <Link href='/pets'>Animal</Link>
    </Box>
  )

}