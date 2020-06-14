class Controller {
	static setup(updateVotesCandidate,updateVotesParty) {

		var theElectorate
		theElectorate = new Electorate('Taranaki-King Country', 2017)
		
		//------------- Adding Parties -----------------//
		theElectorate.addParty("ACT New Zealand")
		theElectorate.addParty("Aotearoa Legalise Cannabis Party")
		theElectorate.addParty("Ban1080")
		theElectorate.addParty("Conservative")
		theElectorate.addParty("Democrats for Social Credit")
		theElectorate.addParty("Green Party")
		theElectorate.addParty("Internet Party")
		theElectorate.addParty("Labour Party")
		theElectorate.addParty("MANA")
		theElectorate.addParty("Māori Party")
		theElectorate.addParty("National Party")
		theElectorate.addParty("New Zealand First Party")
		theElectorate.addParty("New Zealand People's Party")
		theElectorate.addParty("NZ Outdoors Party")
		theElectorate.addParty("The Opportunities Party (TOP)")
		theElectorate.addParty("United Future")
		//-----------------------------------------------//

		//------------- Adding Candidates ----------------//
		theElectorate.addCandidate('HUMPHREY, Hilary Jane Hammonds','Labour Party')
		theElectorate.addCandidate('KURIGER, Barbara Joan','National Party')
		theElectorate.addCandidate('MOORE, Robert Bruce','Green Party')
		theElectorate.addCandidate('THOMSON, Allan George Robin','Conservative')
		//------------------------------------------------//
		if(updateVotesCandidate == false || updateVotesCandidate== null)
		{
			theElectorate.setCandidateVotes('HUMPHREY, Hilary Jane Hammonds',8595)
			theElectorate.setCandidateVotes('KURIGER, Barbara Joan',23854)
			theElectorate.setCandidateVotes('MOORE, Robert Bruce',2900)
			theElectorate.setCandidateVotes('THOMSON, Allan George Robin',568)
		}
		if(updateVotesParty == false || updateVotesParty == null)
		{
			theElectorate.setPartyVotes('ACT New Zealand',231)
			theElectorate.setPartyVotes('Aotearoa Legalise Cannabis Party',120)
			theElectorate.setPartyVotes('Ban1080',97)
			theElectorate.setPartyVotes('Conservative',118)
			theElectorate.setPartyVotes('Democrats for Social Credit',13)
			theElectorate.setPartyVotes('Green Party',1643)
			theElectorate.setPartyVotes('Internet Party',7)
			theElectorate.setPartyVotes('Labour Party',8823)
			theElectorate.setPartyVotes('MANA',9)
			theElectorate.setPartyVotes('Māori Party',194)
			theElectorate.setPartyVotes('National Party',21466)
			theElectorate.setPartyVotes('New Zealand First Party',3330)
			theElectorate.setPartyVotes('New Zealand People\'s Party',31)
			theElectorate.setPartyVotes('NZ Outdoors Party',37)
			theElectorate.setPartyVotes('The Opportunities Party (TOP)',815)
			theElectorate.setPartyVotes('United Future',37)
			
		}
		theElectorate.calcCandidatePercentages()
		theElectorate.calcPartyPercentages()
		return theElectorate
	}
}

