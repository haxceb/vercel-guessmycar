import '../../../App.css';
import PrimarySearchAppBar from '../../../components/Toolbar/toolbar';
import CategoryCard from '../../Components/Categories/categoryCard';
import AllCards from '../../../components/Cards/allCard';
import Category from '../../Components/Categories/SingleCategory';
import OurPolicies from '../../../components/Policies/OurPolicies';
import Testimonials from '../../../components/UserExperience/userexperience';
import NewsLetter from '../../../components/NewsLetter/NewsLetter';
import FooterAll from '../../../components/Footer/FooterAll';
import { Grid, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import LoungeBankenImage from '../../../images/sofa3.jpg';

function HomePage() {
	return (
		<div>
			<PrimarySearchAppBar />
			<Grid container>
				<Grid xs={12} style={{ height: '70vh' }}>
					<CategoryCard title="GRATIS HOCKER" bgImage={LoungeBankenImage} />
				</Grid>
			</Grid>
			<Category />

			<AllCards />
			{/* <OurPolicies /> */}
			<Grid container className="mt-4">
				<Grid item xs={12}>
					<Typography variant="h4">What People Say</Typography>
				</Grid>
				<Grid item xs={12}>
					<Testimonials />
				</Grid>
			</Grid>
			<NewsLetter />
			<FooterAll />
		</div>
	);
}

export default HomePage;
