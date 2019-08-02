import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import SubHeader from '../components/SubHeader'
import Todo from '../components/Todo'

// Port in to using useState hooks, if you need state
const Index = ({ stars }) => (
	<div>
		<Header text="MindfulHands" />
		<SubHeader text="MindfulHands is coming soon. In the mean time enjoy this simple todo app :)" />
		<div>
			<Todo />
		</div>
	</div>
)

Index.getInitialProps = async({ store }) => {
	// Adding a default/initialState can be done as follows:
	// store.dispatch({ type: 'ADD_TODO', text: 'It works!' });
	const res = await fetch(
		'https://api.github.com/repos/ooade/NextSimpleStarter'
	)
	const json = await res.json()
	return { stars: json.stargazers_count }
}

export default connect()(Index)
