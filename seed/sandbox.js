name: "Red Bull",
        img: 'https://upload.wikimedia.org/wikipedia/en/f/ff/Oracle_Red_Bull_Racing_logo.png',
        current_rank: 1,
        points: 287,
        drivers: 'Max Verstappen, Sergio Perez',
        Bio: "Red Bull Racing, currently competing as Oracle Red Bull Racing and also known simply as Red Bull or RBR, is a Formula One racing team, racing under an Austrian licence and based in the United Kingdom. It is one of two Formula One teams owned by conglomerate Red Bull GmbH, the other being Scuderia AlphaTauri."
    })
    team1.save()

    const team2 = await new Teams ({
        name: "Mercedes",
        img: "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes.jpg",
        current_rank: 2,
        points: 152,
        drivers: 'Lewis Hamilton, George Russell',
        Bio: 'Mercedes-Benz, a brand of the Mercedes-Benz Group, has been involved in Formula One as both team owner and engine manufacturer for various periods since 1954. The current Mercedes-AMG Petronas F1 Team is based in Brackley, England, and possesses a German licence.'
    })
    team2.save()

    const team3 = await new Teams ({
        name: "Astin Martin",
        img: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/aston%20martin.jpg',
        current_rank: 3,
        points: 134,
        drivers: 'Fernando Alonso, Lance Stroll',
        Bio: 'Aston Martin’s original Formula 1 foray – over half a century ago – lasted just five races. This time, though, it’s serious. This F1 squad are no strangers to success, having won in their original guise of Jordan and most recently as Racing Point in 2020. Renowned for their ability to punch above their weight, and now with a two-time champion leading their driver line-up, Aston Martin are very much a team to watch…'
    })
    team3.save()

    const team4 = await new Teams ({
        name: "Ferrari",
        img: 'https://media.formula1.com/content/dam/fom-website/teams/Ferrari/logo-ferrari-18%20.jpg',
        current_rank: 4,
        points: 100,
        drivers: 'Carlos Sainz Jr., Charles Leclarc',
        Bio: 'Scuderia Ferrari S.p.A. is the racing division of luxury Italian auto manufacturer Ferrari and the racing team that competes in Formula One racing. The team is also known by the nickname "The Prancing Horse", in reference to their logo'
    })
    team4.save()

    const team5 = await new Teams ({
        name: "Alpine",
        img: 'https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/alpine.jpg',
        current_rank: 5,
        points: 40,
        drivers: 'Esteban Ocon, Pierre Gasly ',
        Bio: "Alpine F1 Team, competing as BWT Alpine F1 Team,[6] is a Formula One constructor which made its debut at the start of the 2021 Formula One World Championship. Formerly named Renault F1 Team and owned by the French automotive company Groupe Renault, the team was rebranded for 2021 to promote Renault's sports car brand, Alpine, and continues to serve as Renault's works team"
    })
    team5.save()