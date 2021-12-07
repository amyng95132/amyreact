
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  	return {
    	dishes: state.dishes,
    	comments: state.comments,
    	promotions: state.promotions
  	}
}

class Main extends React.Component{

	constructor(props){
		super(props);
	}

render(){
	const HomePage = () => {
		return(
			<Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
			promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
			
			/>	
		);
	}

	const DishWithId = ({match}) => {
		return(
			//match.params.dishId return a string
			//based 10 integer
			<DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
			comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
			/>
		);
	}
	return(
		<div>
		<Header />
			<Switch>
				<Route path="/home" component={HomePage} />
				<Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
				<Route path="/menu/:dishId" component={DishWithId} />
				<Route exact path="/contactus" component={Contact} />
				<Redirect to="/home" />
			</Switch>
		<Footer />
		</div>
	);
	}
}
export default withRouter(connect(mapStateToProps)(Main));