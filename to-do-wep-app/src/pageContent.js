import React from 'react';

class PageContent extends React.Component {
	render() {
		return <div class="container-fluid">
			<div class="row vheight-100">
				<aside class="collapse d-sm-block col-sm-4 col-12 bg-light below-nav" id="left-sidebar">
					<div class="list-group list-group-flush">
						<a href="#top" class="list-group-item list-group-item-action active">All</a>
						<a href="#top" class="list-group-item list-group-item-action">Important</a>
						<a href="#top" class="list-group-item list-group-item-action">Today</a>
						<a href="#top" class="list-group-item list-group-item-action">Next 7 Days</a>
						<a href="#top" class="list-group-item list-group-item-action">Private</a>
						<a href="#top" class="list-group-item list-group-item-action">Shared With...</a>
					</div>
					<div class="my-5">
						<h6 class="border-bottom border-gray p-3 mb-0">Projects</h6>
						<div class="list-group list-group-flush">
							<a href="#top" class="list-group-item list-group-item-action">Web Applications I</a>
							<a href="#top" class="list-group-item list-group-item-action">Personal</a>
						</div>
					</div>
				</aside>
				<main class="col-sm-8 col-12 below-nav">
					<h1>All</h1>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							<div class="d-flex w-100 justify-content-between">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="check-t1"></input>
									<label class="custom-control-label" for="check-t1">Complete Lab 2</label>
									<span class="badge badge-primary ml-4">Web Applications I</span>
								</div>
								<small>Friday 27 March 2020 at 11:30</small>
							</div>
						</li>
						<li class="list-group-item">
							<div class="d-flex w-100 justify-content-between">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input" id="check-t2"></input>
									<label class="custom-control-label" for="check-t2">Buy some groceries</label>
									<span class="badge badge-success ml-4">Personal</span>
								</div>
								<svg class="bi bi-person-square" width="1.2em" height="1.2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd" />
									<path fill-rule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
								</svg>
								<small>Today at 14:00</small>
							</div>
						</li>
						<li class="list-group-item">
							<div class="d-flex w-100 justify-content-between">
								<div class="custom-control custom-checkbox">
									<input type="checkbox" class="custom-control-input important" id="check-t3"></input>
									<label class="custom-control-label" for="check-t3">Read a good book!</label>
								</div>
							</div>
						</li>
					</ul>
					<button type="button" class="btn btn-lg btn-success fixed-right-bottom">&#43;</button>
				</main>
			</div>
		</div>

	}
}

export { PageContent }
