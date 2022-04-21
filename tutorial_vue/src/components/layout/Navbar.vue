<template>
	<nav class="navbar is-dark">
		<div class="navbar-brand">
			<router-link to="/" class="navbar-item">
				<strong>Vue Tutorial</strong>
			</router-link>
		</div>

		<div class="navbar-menu">
			<div class="navbar-end">
				<div class="navbar-item">
					<div class="buttons">
						<router-link to="/sign-up" class="button is-success"><strong>Sign Up</strong></router-link>
						<router-link to="/sign-in" class="button is-light">Sign In</router-link>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>
