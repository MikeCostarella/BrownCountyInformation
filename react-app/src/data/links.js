// Brown County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-11-09
//
// Every URL below was fetched and its content checked against the organization
// it claims to be. Sites that block automated fetching (Southern Hills,
// Higginsport, the Solid Waste Authority, Head Start and WAOL) were checked in a
// browser.
//
// THINGS THAT CHANGED SINCE JULY
//
//   * The Auditor's site is realestate.browncountyauditor.org ("Brown County Real
//     Estate Search", ISSG), not Data Dynamics.
//   * omjadamsbrown.org no longer loads; the ohio.org "Visit Brown County" page is
//     replaced by the Chamber's own Travel & Tourism pages (the county has no
//     separate visitors bureau).
//   * Southern Hills Career & Technical Center is shctc.us; the county still links
//     the dead shcc.k12.oh.us. The Brown County ESC has no working website.
//   * usgrantboyhoodhome.org redirects to thelandofusgrant.org.
//
// THE COUNTY PORTAL CARRIES SPAM
//
//   Several browncountyohio.gov pages (Coroner, 911, Township Officials, Board of
//   Elections) have injected pharmacy-spam links; the Board of Elections page's
//   "Web site" link goes to a drug shop. Those pages are left out and the state's
//   boe.ohio.gov/brown page is used instead.
//
// TRAPS
//
//   Brown County INDIANA (Nashville tourism, ourbrowncounty.com), TEXAS,
//   WISCONSIN, KANSAS and others dominate searches; Georgetown KY/TX/DC; Ripley
//   WV/MS/TN; Aberdeen SD/MD/WA.
//
// GEOGRAPHY
//
//   * Nine villages (St. Martin dissolved in 2011; Mount Orab is still a village
//     though now larger than Georgetown) and sixteen townships, none with its own
//     site.
//   * No hospital in the county: Southwest Regional closed in 2014 and Georgetown
//     Behavioral in 2024. Mercy's Mt. Orab emergency department is the only ER.
//     Adams County Regional Medical Center (Seaman) is flagged; it serves Brown.
//   * The three newspapers share one office in Williamsburg (Clermont County).
//   * Brown has its own mental-health board. Adams Brown Community Action and
//     Head Start, OhioMeansJobs and mobility management are joint with Adams.
//
// LEFT OUT rather than listed unverified: Talbert House (no Georgetown page), the
// Brown County ESC (no site), the Senior Citizens Council, Habitat, domestic
// violence services and community foundations (no first-party sites), Indian
// Creek and Bott wildlife areas (no current ODNR pages), the county airport,
// Port Authority, CIC and land bank (no sites).

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Brown County Real Estate Search (ISSG)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Brown County Ohio Government Portal", category: "Government", subcategory: "County", url: "https://www.browncountyohio.gov/", description: "Official Brown County, Ohio government portal with pages for elected offices, county services, towns and villages, township officials and county phone numbers." },
  { name: "Brown County Board of Commissioners", category: "Government", subcategory: "County", url: "https://www.browncountyohio.gov/index.php/commissioners42", description: "County page for the Board of Commissioners (Tony Applegate, Barry Woodruff, Gordon Ellis) at the Administration Building, 800 Mt. Orab Pike, Suite 101, Georgetown, OH 45121, with minutes and budget links." },
  { name: "Brown County Telephone Numbers", category: "Government", subcategory: "County", url: "https://www.browncountyohio.gov/index.php/telephone-numbers", description: "County directory of phone numbers for Brown County offices, departments and other local agencies." },
  { name: "Brown County Board of Developmental Disabilities", category: "Government", subcategory: "County", url: "http://browncbdd.org/", description: "Brown County Board of Developmental Disabilities at 325 W. State St., Bldg. A, Suite 2, Georgetown, OH 45121." },
  { name: "Brown County Job & Family Services", category: "Government", subcategory: "County", url: "https://www.browncountyohio.gov/index.php/job-a-family-services", description: "County page for the Brown County Department of Job & Family Services at 775 Mt. Orab Pike, Georgetown, which runs public assistance programs and the Children and Adult Protective Services unit." },
  { name: "Brown County Child Support Enforcement Agency", category: "Government", subcategory: "County", url: "https://www.browncountyohio.gov/index.php/child-support", description: "County page for the Brown County Child Support Enforcement Agency at 510 E. State Street, Suite 2, Georgetown, OH 45121." },
  { name: "Brown County Auditor - Real Estate Search", category: "Government", subcategory: "Auditor", url: "https://realestate.browncountyauditor.org/", description: "Brown County Auditor Jill Hall's real estate site (800 Mt Orab Pike, Suite 181, Georgetown) with property search, map, sales reports, tax estimator, dog licenses and Board of Revision information." },
  { name: "Brown County GIS", category: "Government", subcategory: "GIS", url: "http://www.browncountygis.com/", description: "Geographical Information System for Brown County, Ohio, with maps and data, run by the Brown County Engineer's Office." },
  { name: "Brown County Treasurer", category: "Government", subcategory: "Treasurer", url: "https://treasurerbrowncounty.com/", description: "Brown County Treasurer Traci Stamper's office at 800 Mt. Orab Pike, Suite 171, Georgetown, Ohio 45121, with property tax information and payment options." },
  { name: "Brown County Recorder", category: "Government", subcategory: "Recorder", url: "https://www.browncountyrecorder.org/", description: "Brown County Recorder Mariah Votel's office at 800 Mt. Orab Pike, Suite 151, Georgetown, with eRecording, fees, forms, property record search and veterans' services." },
  { name: "Brown County Clerk of Courts", category: "Government", subcategory: "Courts", url: "https://clerkofcourtsbrowncountyohio.org/index.php", description: "Office of the Clerk of Courts, Brown County, Ohio, with sections for the Court of Common Pleas, Municipal Court and Title Division." },
  { name: "Brown County Clerk of Courts - Title Division", category: "Government", subcategory: "Courts", url: "https://clerkofcourtsbrowncountyohio.org/homeTD.php", description: "Clerk of Courts Title Division at 9116 Hamer Road, Georgetown, Ohio 45121, handling motor vehicle, trailer and camper titles." },
  { name: "Brown County Common Pleas Court", category: "Government", subcategory: "Courts", url: "http://www.browncountyohiocommonpleascourt.us/", description: "Brown County Common Pleas Court, General Division (Judge Scott T. Gusweiler), at 101 South Main Street, Georgetown, Ohio 45121." },
  { name: "Brown Municipal Court", category: "Government", subcategory: "Courts", url: "https://clerkofcourtsbrowncountyohio.org/homeMC.php", description: "Brown County Municipal Court at 770 Mount Orab Pike, Georgetown, Ohio 45121, with bond schedule, local rules, forms, online payments and record search." },
  { name: "Brown County Probate and Juvenile Court", category: "Government", subcategory: "Courts", url: "https://browncountyprobatejuvenilecourt.com/", description: "Brown County Probate/Juvenile Court in Georgetown, with separate Probate Court and Juvenile Court sections." },
  { name: "Brown County Prosecutor", category: "Government", subcategory: "Courts", url: "https://www.browncountyohio.gov/index.php/prosecutor45", description: "County page for Prosecutor Zac Corbin at 740 Mt. Orab Pike, Suite 1, Georgetown, Ohio 45121." },
  { name: "Brown County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/brown/", description: "Brown County Board of Elections at 800 Mt. Orab Pike, Suite 111, Georgetown, OH 45121, with voter registration links, voting calendar and campaign finance filing." },
  { name: "Brown County Sheriff", category: "Government", subcategory: "Public Safety", url: "http://www.browncountyohiosheriff.us/", description: "Brown County Sheriff's Office (Sheriff Chris Hodges) at 750 Mt. Orab Pike, Georgetown, OH 45121." },
  { name: "Brown County Emergency Management", category: "Government", subcategory: "Public Safety", url: "https://www.browncountyohio.gov/index.php/emergency-management", description: "County page for Brown County Emergency Management at 325 W. State Street, Bldg. B, Georgetown, with LEPC meeting information." },
  { name: "Brown County Animal Shelter", category: "Government", subcategory: "Public Safety", url: "https://www.browncountyohio.gov/index.php/animal-shelter", description: "County page for the Brown County Animal Shelter at 100 Veterans Blvd., Georgetown, Ohio 45121." },
  { name: "Brown County Engineer", category: "Government", subcategory: "Public Works", url: "https://www.browncountyengineer.org/", description: "Brown County Engineer's Office (Todd Cluxton, 25 Veterans Blvd., Georgetown) with road closings, projects, bids, permits, tax map and subdivision rules." },
  { name: "Brown County Building Department", category: "Government", subcategory: "Public Works", url: "https://www.browncountyohio.gov/index.php/building-department", description: "County Building Department at 800 Mt. Orab Pike, Suite 111, Georgetown, which issues permits and inspections for one-, two- and three-family dwellings under the Residential Code of Ohio." },
  { name: "Brown County Planning Commission", category: "Government", subcategory: "Planning", url: "https://www.browncountyohio.gov/index.php/planning-commission", description: "County Planning Commission at 325 W. State St., Bldg. B, Georgetown, which plans for unincorporated areas and administers the Brown County Subdivision Regulations." },
  { name: "Brown County Development Department", category: "Government", subcategory: "Planning", url: "https://www.browncountyohio.gov/index.php/development", description: "County Development Department at 800 Mt. Orab Pike, Suite 131, Georgetown, handling fair housing outreach and the CHIP housing program." },
  { name: "Brown County Soil and Water Conservation District", category: "Government", subcategory: "Conservation", url: "https://brownswcd.org/", description: "Brown County Soil and Water Conservation District at 706 South Main Street, Georgetown, Ohio 45121." },
  { name: "Brown County Veterans' Service Commission", category: "Government", subcategory: "Veterans", url: "https://www.browncountyohio.gov/index.php/veterans-services", description: "County page for the Brown County Veterans' Service Commission at 826 Mt. Orab Pike, Georgetown, OH 45121." },
  { name: "Adams Brown Mobility Management", category: "Government", subcategory: "Transit", url: "https://www.adamsbrownmobility.com/", description: "Transit mobility management program for Adams and Brown counties, run jointly by Adams Brown Community Action Partnership and the Ohio Department of Transportation." },
  { name: "Brown County Towns & Villages", category: "Government", subcategory: "Village", url: "https://www.browncountyohio.gov/index.php/towns-a-villages", description: "County directory page linking to profiles of Brown County's villages and communities." },
  { name: "Village of Aberdeen", category: "Government", subcategory: "Village", url: "https://thevillageofaberdeenoh.com/", description: "Village of Aberdeen at 1142 US Route 52, Aberdeen, Ohio 45101, with mayor's court, council meeting and village administration information." },
  { name: "Village of Fayetteville", category: "Government", subcategory: "Village", url: "https://www.fayettevilleoh.us/", description: "Village of Fayetteville at 81 W. Pike St., Fayetteville, OH 45118, with police, fire, roads, zoning, water and parks departments and online bill pay." },
  { name: "Village of Georgetown", category: "Government", subcategory: "Village", url: "https://georgetownohio.gov/", description: "Village of Georgetown at 121 N. Main St., Georgetown, Ohio 45121, with village officials, ordinances, utilities, income tax, zoning and mayor's court payments." },
  { name: "Village of Hamersville", category: "Government", subcategory: "Village", url: "https://www.hamersville.gov/", description: "Village of Hamersville at 130 West Main Street, Hamersville, Ohio 45130, with public records, mayor's court fees and utility payments." },
  { name: "Village of Mt. Orab", category: "Government", subcategory: "Village", url: "https://mtoraboh.us/", description: "Village of Mt. Orab at 211 South High Street, Mt. Orab, Ohio 45154, with council, police, fire and EMS, utilities, income tax, zoning and mayor's court." },
  { name: "Village of Ripley", category: "Government", subcategory: "Village", url: "https://villageofripley.com/", description: "Village of Ripley at 123 Waterworks Road, Ripley, OH 45167, with mayor, council, utilities, mayor's court, police and Maplewood Cemetery information." },
  { name: "Russellville (county page)", category: "Government", subcategory: "Village", url: "https://www.browncountyohio.gov/index.php/towns-a-villages/russellville8", description: "County profile page for the Village of Russellville, village office at 203 East Main Street, Russellville, Ohio 45168." },
  { name: "Village of Sardinia", category: "Government", subcategory: "Village", url: "https://villageofsardinia.com/", description: "Village of Sardinia at 151 Maple Avenue, Sardinia, Ohio 45171, with fire, police, water, sewer, trash, cemetery, park, zoning and income tax services." },
  { name: "Brown County Engineer - Township Info", category: "Government", subcategory: "Township", url: "https://www.browncountyengineer.org/township-info.html", description: "Brown County Engineer page with information for the county's 16 townships." },
  { name: "Village of Higginsport", category: "Government", subcategory: "Village", url: "https://higginsport-ohio.org/", description: "Village of Higginsport, Ohio, with village government, meeting minutes, ordinances, audits and public-safety information." },
  { name: "Brown County Solid Waste Authority", category: "Government", subcategory: "Public Works", url: "https://www.browncountysolidwaste.org/", description: "Solid waste authority serving Brown County, Ohio, with recycling locations, waste disposal, events and education." },
  // ---------- Education ----------
  { name: "Western Brown Local Schools", category: "Education", subcategory: "K-12", url: "https://www.wb.k12.oh.us/", description: "Public district with offices at 524 West Main Street, Mt. Orab, operating Western Brown High School, Mt. Orab Middle School, Mt. Orab Elementary and Hamersville Elementary & Middle School." },
  { name: "Georgetown Exempted Village School District", category: "Education", subcategory: "K-12", url: "https://www.gtown.k12.oh.us/", description: "Public district with offices at 1043 Mount Orab Pike, Georgetown, operating Georgetown Jr/Sr High School and an elementary school." },
  { name: "Eastern Local Schools (Brown County)", category: "Education", subcategory: "K-12", url: "https://www.elsd.us/", description: "Public district with offices at 11479 US 62, Winchester, operating Eastern High School, Eastern Middle School, Russellville Elementary and Sardinia Elementary." },
  { name: "Fayetteville-Perry Local School District", category: "Education", subcategory: "K-12", url: "https://www.fpls.us/", description: "Public district with offices at 551 S. Apple St., Fayetteville, operating an elementary, middle and high school." },
  { name: "Ripley Union Lewis Huntington School District", category: "Education", subcategory: "K-12", url: "https://rulh.us/", description: "Public district with offices at 502 South Second Street, Ripley, operating RULH Elementary School and RULH Jr./Sr. High School." },
  { name: "St. Michael School (Ripley)", category: "Education", subcategory: "Private School", url: "https://www.stmichaelripley.com/", description: "Private Catholic school for preschool through 8th grade at 300 Market Street, Ripley." },
  { name: "Southern State Community College - Brown County Campus", category: "Education", subcategory: "University", url: "https://www.sscc.edu/about/campuses.shtml#brown", description: "Southern State Community College campus at 351 Brooks-Malott Road, Mt. Orab, along Highway 32." },
  { name: "Brown County Public Library", category: "Education", subcategory: "Library", url: "https://www.browncountypubliclibrary.org/", description: "County public library system whose site lists library events, including programs at the Sardinia Library." },
  { name: "Union Township Public Library", category: "Education", subcategory: "Library", url: "https://ripleylibrary.com/about/locations/", description: "Public library with the Ripley Library at 27 Main Street, Ripley, and branch libraries in Russellville and Aberdeen." },
  { name: "Southern Hills Career & Technical Center", category: "Education", subcategory: "Career Center", url: "https://www.shctc.us/", description: "Career-technical center for Brown County high school students and adults at 9193 Hamer Road, Georgetown." },
  { name: "Adams Brown Head Start / Early Head Start", category: "Education", subcategory: "Preschool", url: "https://abhsehs.org/", description: "Head Start and Early Head Start for Adams and Brown counties, with online family pre-applications." },
  // ---------- Health ----------
  { name: "Mercy Health - Mt. Orab Medical Center Emergency Department", category: "Health", subcategory: "Hospital", url: "https://mercy.com/locations/emergency-room/cincinnati/mercy-health-mt-orab-medical-center-emergency-department", description: "Emergency department open 24 hours a day at 154 Health Partners Circle, Mt. Orab." },
  { name: "Adams County Regional Medical Center", category: "Health", subcategory: "Hospital", url: "https://www.acrmcoh.com/", description: "Hospital in Seaman, Adams County, that describes itself as serving Adams and Brown Counties and lists family medicine clinics in Georgetown and Mt. Orab." },
  { name: "ACRMC Family Medicine: Georgetown", category: "Health", subcategory: "Clinic", url: "https://www.acrmcoh.com/georgetown", description: "Adams County Regional Medical Center family medicine clinic at 4881 OH-125, Georgetown." },
  { name: "ACRMC Family Medicine: Mt. Orab", category: "Health", subcategory: "Clinic", url: "https://www.acrmcoh.com/mt-orab", description: "Adams County Regional Medical Center family medicine clinic at 217 Hughes Blvd, Mt. Orab, offering walk-in and same-day appointments." },
  { name: "Mercy Health - Mt. Orab Family Medicine", category: "Health", subcategory: "Clinic", url: "https://www.mercy.com/locations/primary-care-family-medicine/cincinnati/mercy-health-mt-orab-family-medicine", description: "Primary care and family medicine office with integrated behavioral health at 621 W Main Street, Mt. Orab." },
  { name: "Mercy Health - Georgetown Family Medicine", category: "Health", subcategory: "Clinic", url: "https://www.mercy.com/locations/primary-care-family-medicine/cincinnati/mercy-health-georgetown-family-medicine", description: "Primary care and family medicine office at 9354 Mt. Orab Pike, Georgetown." },
  { name: "Mercy Health - Sardinia Family Medicine", category: "Health", subcategory: "Clinic", url: "https://www.mercy.com/locations/primary-care-family-medicine/cincinnati/mercy-health-sardinia-family-medicine", description: "Primary care and family medicine office with integrated behavioral health at 7109 Bachman Rd., Sardinia." },
  { name: "Mercy Health - The Heart Institute, Mt. Orab", category: "Health", subcategory: "Clinic", url: "https://www.mercy.com/locations/specialty-locations/heart-care-vascular-care/mercy-health-the-heart-institute-mt-orab", description: "Heart and vascular care office at 621 W. Main St., Mt. Orab." },
  { name: "HealthSource Mt. Orab Family Practice", category: "Health", subcategory: "Clinic", url: "https://www.healthsourceofohio.org/locations/healthsource-mt-orab-family-practice/", description: "Community health center family practice with weekday walk-in care, integrated behavioral health and an on-site pharmacy at 150 Health Partners Circle, Mt. Orab." },
  { name: "HealthSource Mt. Orab Ob/Gyn", category: "Health", subcategory: "Clinic", url: "https://www.healthsourceofohio.org/locations/healthsource-mt-orab-ob-gyn/", description: "Community health center women's health office offering prenatal, gynecologic and family planning care at 150 Health Partners Circle, Mt. Orab." },
  { name: "HealthSource Mt. Orab Dental", category: "Health", subcategory: "Clinic", url: "https://www.healthsourceofohio.org/locations/healthsource-mt-orab-dental/", description: "Community health center general dental office at 150 Health Partners Circle, Mt. Orab." },
  { name: "HealthSource Georgetown Pediatrics and Family Practice", category: "Health", subcategory: "Clinic", url: "https://www.healthsourceofohio.org/locations/healthsource-georgetown-pediatrics-family-practice/", description: "Community health center family practice and pediatric office with weekday pediatric walk-in care and weekend Convenient Care at 631 E. State Street, Georgetown." },
  { name: "Brown County Health Department", category: "Health", subcategory: "Public Health", url: "https://www.browncountyhealth.org/", description: "County health department at 9116 Hamer Road, Suite 101, Georgetown, providing vital statistics, environmental health inspections and permits, immunizations and disease surveillance." },
  { name: "Brown County Board of Mental Health & Addiction Services", category: "Health", subcategory: "Mental Health", url: "https://www.bcmhas.org/", description: "County board that plans, funds and contracts with local providers for mental health and addiction services in Brown County." },
  { name: "Child Focus Behavioral Health Urgent Care (Mt. Orab)", category: "Health", subcategory: "Mental Health", url: "https://www.child-focus.org/substance-use/services/behavioral-health-urgent-care/", description: "Walk-in urgent care for mental health and substance use needs at 710-B North High Street, Mt. Orab, serving children and adults from Brown, Clermont, Clinton, Highland and Adams Counties." },
  { name: "BrightView Georgetown Addiction Treatment Center", category: "Health", subcategory: "Addiction", url: "https://www.brightviewhealth.com/locations/georgetown-addiction-treatment-center/", description: "Outpatient addiction treatment center offering medication-assisted treatment, counseling and opioid treatment program services at 421 Home St, Georgetown." },
  { name: "Hospice of Hope Ohio Valley (Mt. Orab office)", category: "Health", subcategory: "Hospice", url: "https://hospiceofhope.com/ohiooffice", description: "Satellite office of Hospice of Hope at 215 Hughes Blvd., Mt. Orab (937-444-4900); the organization's home page lists Brown among the southern Ohio counties it serves." },
  { name: "VITAS Healthcare - Cincinnati", category: "Health", subcategory: "Hospice", url: "https://vitas.com/locations-search/cincinnati", description: "Hospice and palliative care program based at 11500 Northlake Drive, Suite 400, Cincinnati, whose page lists Brown among the Ohio counties it serves." },
  // ---------- Business & Economy ----------
  { name: "Brown County Ohio Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://browncountyohiochamber.com/", description: "Chamber of commerce at 720 N. High Street, Mt. Orab, with a member business directory, business resource guide, job listings, community calendar and member events." },
  { name: "OSU Extension Brown County", category: "Business & Economy", subcategory: "Agriculture", url: "https://brown.osu.edu/about", description: "Ohio State University Extension office at 325 W. State St., Bldg. B, Georgetown, offering family and consumer sciences, 4-H youth development, community development and agriculture and natural resources programs." },
  { name: "Brown County Farm Bureau", category: "Business & Economy", subcategory: "Agriculture", url: "https://ofbf.org/community/counties/brown/", description: "Ohio Farm Bureau county page for the Brown County Farm Bureau, PO Box 288, Georgetown, with office hours, staff contacts, membership dues and scholarship information." },
  { name: "Brown County Rural Water Association", category: "Business & Economy", subcategory: "Utility", url: "http://www.bcrwa.org", description: "Rural water system site with online bill payment, AutoPay and paperless billing, and pages on its treatment process and wellhead." },
  { name: "Ohio Valley Regional Development Commission (OVRDC)", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.ovrdc.org/", description: "Twelve-county Southern Ohio regional development commission at 73 Progress Dr., Waverly, providing economic and community development, project finance, transportation planning, mapping and small business gap lending." },
  { name: "OhioMeansJobs Adams-Brown (ABCAP Employment & Training Services)", category: "Business & Economy", subcategory: "Workforce", url: "https://www.abcap.net/employment--training-services.html", description: "Adams Brown Community Action Partnership page for the OhioMeansJobs centers at 406 W. Plum St., Georgetown, and 19211 SR 136, Winchester, offering free job-seeker and employer services and training assistance for eligible residents." },
  // ---------- Community & Social ----------
  { name: "Adams Brown Community Action Partnership (ABCAP)", category: "Community & Social", subcategory: "Nonprofit", url: "https://abcap.net/", description: "Community action agency at 406 West Plum Street, Georgetown, serving Adams and Brown counties with Head Start, senior services, home energy, housing, employment and training, WIC, recycling and Adams Brown Mobility transportation." },
  { name: "Brown County Humane Society", category: "Community & Social", subcategory: "Animal Welfare", url: "https://bchsohio.org/", description: "Humane society in Georgetown that runs the Brown County Dog Shelter at 100 Veterans Blvd and a Small Animal Adoption Center at 422 Lincoln Ave, with adoptions, lost and found help, a pet food pantry and spay/neuter vouchers." },
  { name: "Hope Emergency Program", category: "Community & Social", subcategory: "Food & Assistance", url: "http://hopeemergency.org", description: "Fayetteville-based 501(c)(3) outreach program that distributes food, clothing and household items weekly and helps families after fires and floods, serving Adams, Brown, Clinton and Highland counties." },
  { name: "Freestore Foodbank", category: "Community & Social", subcategory: "Food & Assistance", url: "https://freestorefoodbank.org/", description: "Cincinnati-based tristate food bank whose partner-agency list includes Brown County sites in Georgetown and Fayetteville." },
  { name: "United Way of Greater Cincinnati: Brown County OH", category: "Community & Social", subcategory: "Nonprofit", url: "https://www.uwgc.org/service-area/brown-county-oh/", description: "United Way of Greater Cincinnati's Brown County, Ohio service-area page listing the partner agencies it supports in the county." },
  // ---------- Recreation & Tourism ----------
  { name: "Brown County Travel and Tourism (Chamber)", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://browncountyohiochamber.com/travel-and-tourism/", description: "Brown County Chamber's travel and tourism section with pages on history and museums, covered bridges, outdoor recreation, wineries and breweries, itineraries, lodging, dining and a free visitors guide." },
  { name: "Brown County Visitors Center", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://www.browncountyohiochamber.com/visitors-center/", description: "Visitor center at 720 N. High Street, Mt. Orab, with a 24-hour walk-in foyer of maps, brochures and visitors guides for Brown County." },
  { name: "The Land of U.S. Grant", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.thelandofusgrant.org/", description: "Non-profit at 219 E. Grant Ave., Georgetown, that operates Ulysses S. Grant's boyhood family home and tannery and the schoolhouse he attended, along with his birthplace." },
  { name: "John Rankin House", category: "Recreation & Tourism", subcategory: "Museum", url: "https://www.ohiohistory.org/visit/museum-and-site-locator/john-rankin-house", description: "Ohio History Connection site page for the John Rankin House in Ripley, a National Historic Landmark, with seasonal visiting hours." },
  { name: "John P. Parker House", category: "Recreation & Tourism", subcategory: "Museum", url: "https://johnparkerhouse.net/", description: "John P. Parker Historical Society site for the Parker House Museum at 300 N. Front Street, Ripley, a National Historic Landmark interpreting the life of abolitionist and inventor John P. Parker." },
  { name: "Ripley Heritage, Inc.", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://ripleyohio.net/", description: "Ripley Heritage, Inc. visitor site for the village of Ripley with historic sites, a walking tour, outdoor recreation, dining, shopping, lodging, clubs and an event calendar." },
  { name: "Ripley Historic Walking Tour", category: "Recreation & Tourism", subcategory: "Trails", url: "https://ripleyohio.net/historic-walking-tour/", description: "Self-guided walking tour of the Ripley Historic District with 19 illustrated stops, mostly on N. Front Street, including Underground Railroad sites." },
  { name: "Ripley Museum", category: "Recreation & Tourism", subcategory: "Museum", url: "https://ripleyohio.net/museum-ripley-museum/", description: "Ripley Heritage, Inc. museum in an 1850s house at 219 N. 2nd St., Ripley, with local historic artifacts, a Civil War collection, historic clothing and veterans' interviews." },
  { name: "Ohio Tobacco Museum", category: "Recreation & Tourism", subcategory: "Museum", url: "https://ohiotobaccomuseum.wordpress.com/", description: "Site of the Ohio Tobacco Museum in Ripley describing southern Ohio's tobacco history, including the discovery of white burley tobacco in Brown County." },
  { name: "Ohio Rural Heritage Festival", category: "Recreation & Tourism", subcategory: "Festival", url: "https://ripleyohio.net/ohio-rural-heritage-festival/", description: "Ripley Heritage, Inc. page for the Ohio Rural Heritage Festival with the event poster, sponsor and vendor sign-ups and directions." },
  { name: "Brown County Fair", category: "Recreation & Tourism", subcategory: "Fair", url: "https://thelittlestatefair.com/", description: "Brown County Agricultural Society site for the Brown County Fair, \"The Little State Fair,\" held at the fairgrounds at 325 West State Street, Georgetown." },
  { name: "Eagle Creek Wildlife Area", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/eagle-creek-wildlife-area", description: "ODNR page for the 2,341-acre Eagle Creek Wildlife Area about 5 miles east of Ripley, with permit-only hunting and trapping from September 1 through May 31 and a downloadable map." },
  { name: "Kope Hollow Nature Preserve", category: "Recreation & Tourism", subcategory: "Trails", url: "https://www.cardinallandconservancy.org/kope-hollow-nature-preserve/", description: "Cardinal Land Conservancy page for the 54-acre Kope Hollow Nature Preserve in Union Township, Brown County, with a trail map, mature woods and waterfalls and no facilities." },
  { name: "Gaslight Theater Players", category: "Recreation & Tourism", subcategory: "Arts", url: "https://gaslighttheaterplayers.com/", description: "Community theater group site with pages for upcoming shows, auditions, past shows, tickets and meetings." },
  { name: "Meranda-Nixon Winery", category: "Recreation & Tourism", subcategory: "Attraction", url: "http://www.meranda-nixonwinery.com/", description: "Ripley winery offering vineyard and winery tours and tastings of its Ohio-grown red and white wines, with seasonal tasting-room hours." },
  { name: "Indian Spring Winery", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.indianspringwinery.com/", description: "Winery in Sardinia offering its own wines, tastings, a picnic lawn, food trucks and weekend live music." },
  { name: "Sons of Toil Brewing", category: "Recreation & Tourism", subcategory: "Attraction", url: "https://www.sonsoftoilbrewing.com/", description: "Brewery and taproom at 14090 Klein Road, Mount Orab, with beers and ciders on tap, a kitchen, a beer garden, live music and a seasonal Saturday farmers market." },
  { name: "Friendly Meadows Golf Course", category: "Recreation & Tourism", subcategory: "Sports", url: "https://www.friendlymeadowsgolf.com/", description: "Public 18-hole golf course at 809 State Route 125, Hamersville, with tee times, memberships, leagues and golf outings." },
  { name: "White Oak Golf Course", category: "Recreation & Tourism", subcategory: "Sports", url: "http://www.whiteoakgolf.com/", description: "18-hole golf course in Sardinia with a driving range, lessons, pro shop, restaurant and bar, and event facilities." },
  { name: "Georgetown Parks & Recreation", category: "Recreation & Tourism", subcategory: "Parks", url: "https://georgetownohio.gov/parks-and-recreation/", description: "Village of Georgetown parks page, including Kathryn Hanlon Park on East State Street." },
  // ---------- News & Media ----------
  { name: "Brown County Press", category: "News & Media", subcategory: "Newspaper", url: "https://www.browncountypress.com/", description: "Brown County newspaper site with local news, obituaries, sports, public notices and an e-edition, listing its office at 348 W. Main Street, Williamsburg." },
  { name: "News Democrat", category: "News & Media", subcategory: "Newspaper", url: "https://www.newsdemocrat.com/", description: "Georgetown-area newspaper site covering Brown County news, sports, obituaries and public notices, listing its office at 348 W. Main Street, Williamsburg." },
  { name: "The Ripley Bee", category: "News & Media", subcategory: "Newspaper", url: "https://ripleybee.com/", description: "Ripley newspaper site with local news, obituaries and sports, listing its office at 348 W. Main Street, Williamsburg." },
  { name: "C103 (WRAC 103.1 FM)", category: "News & Media", subcategory: "Radio", url: "https://www.c103.fm/", description: "Website of C103, the station the FCC lists as WRAC, licensed to Georgetown, Ohio, to Dreamcatcher Communications, with program and advertising information and live dirt-track racing coverage." },
  { name: "995 The Edge (WAOL)", category: "News & Media", subcategory: "Radio", url: "https://www.995theedge.fm/", description: "WAOL 99.5 \"The Edge,\" licensed to Ripley, covering local fairs and festivals." },
];
