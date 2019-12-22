(document => {
	const CLIENTID = '4b8a59w0ops6ut6fuh7shdb1n0ohgy';
	const route = new URLSearchParams(window.location.search);
	const landing = document.querySelector('#landing');
	const content = document.querySelector('#content');
	const login_main = document.querySelector('.login_main');
	const btn_main = document.querySelector('.btn_main');
	const login = document.querySelector('.login');
	const btn = document.querySelector('.btn');
	const output = document.querySelector('#app');
	const footCenter = document.querySelector('#foot_center');
	const loadMore = document.querySelector('#load_more');
	const moreText = document.querySelector('.more_text');
	const moreLoader = document.querySelector('.more_loader');
	const limit = 10;
	let followsOffset = 0;

	const timeFormat = (timestamp) => {
		const d = new Date();
		const t = new Date(timestamp);

		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		const curYear = d.getFullYear();
		const curMonth = months[d.getMonth()];
		const curDate = d.getDate();

		const year = t.getFullYear();
		const month = months[t.getMonth()];
		const date = t.getDate();
		const hour = t.getHours();
		const min = t.getMinutes() < 10 ? `0${t.getMinutes()}` : t.getMinutes();

		let thisYear;
		year !== curYear ? thisYear = ` ${year}` : thisYear = '';

		if (`${date}.${month}.${year}` === `${curDate}.${curMonth}.${curYear}`) {
			return `today at ${hour}:${min}`
		} else if (`${date}.${month}.${year}` === `${curDate - 1}.${curMonth}.${curYear}`) {
			return `yesterday at ${hour}:${min}`
		} else {
			return `${date} ${month}${thisYear} at ${hour}:${min}`
		}
	};

	const template = {
		profile: (id, display_name, name, type, bio, registration, lastSeen, logo) => {
			return `
				<article class="container container-profile container-profile-main">
					<style>.user-profile-content .user-head:before {background-image: url(${logo})}</style>
					<div class="user-profile-content">
						<div class="user-head">
							<div class="container container-profile user-info">
								<div class="avatar animated fadeInUpBig">
									<img src="${logo}" class="img-circle">
								</div>
								<div class="info">	
									<div class="uname animated fadeInUpBig">
										<a href="https://www.twitch.tv/${name}" target="_blank">
											<h4 title="${name} - id ${id}">${display_name}</h4>
										</a>
									</div>
									${bio !== null ? `<p class="bio animated fadeInUpBig">${bio}</p>` : ''}
								</div>
							</div>
						</div>

						<div class="include">
							<div class="container container-profile user-posts__container">
								<div class="more_info">
									<span>Last seen: </span>
									<b>${lastSeen}</b>
								</div>
								<div class="more_info">
									<span>Registration: </span>
									<b>${registration}</b>
								</div>
								<div id="follows" class="follows more_info"></div>
							</div>
						</div>
					</div>
				</article>
			`;
		},
		follow: (notifications, followDate, display_name, name, partner, logo, ...tags) => {
			return `
				<a href="?login=${name}" class="follow_item">
					<div class="follow_item_left">
						<img src="${logo}" class="follow_img" alt="">
					</div>

					<div class="follow_item_right">
						<div class="follow_name">${display_name} ${partner ? template.ic_partner('#9147ff', 14) : ''}</div>
						<div class="follow_date">Followed from ${followDate} ${notifications ? template.ic_notif_on('#ADADB8', 14) : template.ic_notif_off('#ADADB8', 14)}</div>
						<div class="follow_tags">
							${tags[0] ? `<span class="follow_tag">${tags[0]}</span>` : ''}
							${tags[1] ? `<span class="follow_tag">${tags[1]}</span>` : ''}
						</div>
					</div>
				</a>
			`;
		},
		follow_title: () => {
			return `<div>FOLLOWED CHANNELS</div>`;
		},
		error: (message) => {
			return `
				<div class="empty-results">
					${template.ic_info('#c4c4c5', 112)}
					<div class="empty_words">
						<div class="empty_top">${message}</div>
					</div>
				</div>
			`;
		},
		ic_info: (color = '#fff', size = 24) => {
			return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="${color}"></path></svg>`;
		},
		ic_notif_on: (color = '#fff', size = 24) => {
			return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z" fill="${color}"/></path></svg>`;
		},
		ic_notif_off: (color = '#fff', size = 24) => {
			return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z" fill="${color}"/></path></svg>`;
		},
		ic_partner: (color = '#fff', size = 24) => {
			return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2l6 2 2 6-2 6-6 2-6-2-2-6 2-6 6-2zM8.889 13.636l5.43-5.429-1.415-1.414-4.015 4.015-2.015-2.015-1.414 1.414 3.429 3.43z" fill="${color}"></path></svg>`;
		}
	};

	const getProfile = (login) => {
		fetch(`https://api.twitch.tv/kraken/users?login=${login}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/vnd.twitchtv.v5+json',
				'Client-ID': CLIENTID
			}
		}).then(
			response => response.json()
		).then(
			data => {
				data.users.length !== 0 ? (
					output.innerHTML = template.profile(
						data.users[0]._id,
						data.users[0].display_name,
						data.users[0].name,
						data.users[0].type,
						data.users[0].bio,
						timeFormat(new Date(data.users[0].created_at).getTime()),
						timeFormat(new Date(data.users[0].updated_at).getTime()),
						data.users[0].logo
					),
					footCenter.classList.remove('hide'),
					moreText.classList.add('hide'),
					moreLoader.classList.remove('hide'),
					loadMore.setAttribute('data-id', data.users[0]._id),
					follows.innerHTML = template.follow_title(),
					getFollows(data.users[0]._id),
					!route.has('login') ? (
						changeUrl(`?login=${data.users[0].name}`)
					) : (
						route.get('login') != data.users[0].name && (
							changeUrl(`?login=${data.users[0].name}`)
						)
					)
				) : (
					footCenter.classList.add('hide'),
					output.innerHTML = template.error('Nothing! Try another username')
				),
				landing.classList.add('hide'),
				content.classList.remove('hide')
			}
		).catch(
			error => {
				footCenter.classList.add('hide'),
				output.innerHTML = template.error('Error')
			}
		)
	};

	const getFollows = (userId, offset = 0, limit = 10) => {
		fetch(`https://api.twitch.tv/kraken/users/${userId}/follows/channels?limit=${limit}&offset=${offset}`, {
			method: 'GET',
			headers: {
				'Accept': 'application/vnd.twitchtv.v5+json',
				'Client-ID': CLIENTID
			}
		}).then(
			response => response.json()
		).then(
			data => {
				const follows = document.getElementById('follows');
				data.follows.length !== 0 ? (
					Object.keys(data.follows).map((i) => {
						follows.innerHTML += template.follow(
							data.follows[i].notifications,
							timeFormat(new Date(data.follows[i].created_at).getTime()),
							data.follows[i].channel.display_name,
							data.follows[i].channel.name,
							data.follows[i].channel.partner,
							data.follows[i].channel.logo,
							data.follows[i].channel.game,
							data.follows[i].channel.language
						)
					}),
					moreText.classList.remove('hide'),
					moreLoader.classList.add('hide'),
					data.follows.length <= 7 && footCenter.classList.add('hide')
				) : (
					footCenter.classList.add('hide'),
					follows.innerHTML += template.error('Unable to get follows')
				)
			}
		).catch(
			error => {
				footCenter.classList.add('hide'),
				follows.innerHTML = template.error('Error')
			}
		)
	};

	const changeUrl = (url) => {
		history.pushState && (
			history.pushState(null, null, url)
		);
		return false;
	};

	btn_main.addEventListener('click', () => {
		login_main.value.trim() ? (
			getProfile(login_main.value.trim()),
			login_main.classList.remove('error')
		) : (
			login_main.classList.add('error')
		)
	});

	login_main.addEventListener('keyup', (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			login_main.value.trim() ? (
				getProfile(login_main.value.trim()),
				login_main.classList.remove('error')
			) : (
				login_main.classList.add('error')
			)
		}
	});

	login_main.addEventListener('input', () => {
		login_main.value.trim() && (
			login_main.classList.remove('error')
		)
	});

	btn.addEventListener('click', () => {
		login.value.trim() ? (
			getProfile(login.value.trim()),
			login.classList.remove('error')
		) : (
			login.classList.add('error')
		)
	});

	login.addEventListener('keyup', (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			login.value.trim() ? (
				getProfile(login.value.trim()),
				login.classList.remove('error')
			) : (
				login.classList.add('error')
			)
		}
	});

	login.addEventListener('input', () => {
		login.value.trim() && (
			login.classList.remove('error')
		)
	});

	loadMore.addEventListener('click', () => {
		const userId = loadMore.getAttribute('data-id');
		moreText.classList.add('hide'),
		moreLoader.classList.remove('hide'),
		getFollows(userId, followsOffset += limit)
	});

	route.has('login') && (
		route.get('login').length !== 0 && (
			landing.classList.add('hide'),
			content.classList.remove('hide'),
			getProfile(route.get('login').trim())
		)
	);
})(document);