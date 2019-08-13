import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

export default class App extends Component {
  render = () => {
    return (
      <ScrollView style={{ backgroundColor: '#212121' }}>
        <View style={styles.global}>
          {/* LOGO */}
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../IMDB/ios/Images/IMDB.png')}
            />
          </View>

          {/* TITRE */}
          <View style={styles.container}>
            <Text style={styles.title}>Interstellar</Text>

            {/* POSTER DU FILM */}
            <View style={styles.movie}>
              <Image
                style={styles.moviePoster}
                source={require('../IMDB/ios/Images/interstellar-movie.jpg')}
              />

              {/*RESUME DU FILM */}
              <View style={styles.movieP}>
                <Text style={styles.instructions}>
                  A team of explorers travel through a wormohole in space in an
                  attempt to ensure humanity survival.
                </Text>
                {/* BOUTON ADD TO WATCHLIST */}
                <TouchableOpacity style={styles.button} underlayColor="#fff">
                  <Text style={styles.buttonText}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* ETOILES NOTATIONS */}
            <View flexDirection="row">
              <View style={styles.starNotes}>
                <Image
                  style={styles.star}
                  source={require('../IMDB/ios/Images/yellowStar.png')}
                />
                <Text style={styles.textWhite}>8,6/10</Text>
                <Text style={styles.textGrey}>1.1M</Text>
              </View>
              <View style={styles.starNotes}>
                <Image
                  style={styles.star}
                  source={require('../IMDB/ios/Images/star-transparent.png')}
                />
                <Text style={styles.textWhite}>RATE THIS</Text>
              </View>
              <View style={styles.starNotes}>
                <Text style={styles.metascore}>74</Text>
                <Text style={styles.textWhite}>Metascore</Text>
                <Text style={styles.textGrey}>46 critic reviews</Text>
              </View>
            </View>
          </View>
          {/* CAROUSSEL PHOTOS ACTEURS */}
          <View backgroundColor={'#212121'}>
            <View style={styles.container2}>
              <Text style={styles.top}>Top Billed Cast</Text>
              <Text style={styles.seeAll}>SEE ALL</Text>
            </View>

            <ScrollView horizontal={true}>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require('../IMDB/ios/Images/Matthew.jpg')}
                  />
                  <View style={styles.actors}>
                    <Text style={styles.textWhite}>Matthew McCon</Text>
                    <Text style={styles.textGrey}>Cooper</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require('../IMDB/ios/Images/anne-hathaway.png')}
                  />
                  <View style={styles.actors}>
                    <Text style={styles.textWhite}>Anne Hathaway</Text>
                    <Text style={styles.textGrey}>Brand</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require('../IMDB/ios/Images/jessica-chastain.jpg')}
                  />
                  <View style={styles.actors}>
                    <Text style={styles.textWhite}>Jessica Chastain</Text>
                    <Text style={styles.textGrey}>Murph</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require('../IMDB/ios/Images/john-lithgow.png')}
                  />
                  <View style={styles.actors}>
                    <Text style={styles.textWhite}>John Lithgow</Text>
                    <Text style={styles.textGrey}>Donald</Text>
                  </View>
                </View>
              </View>
            </ScrollView>

            {/* DERNIERE PARTIE  */}
            <Text style={styles.casting}>Director</Text>
            <Text style={styles.castingName}>Christopher Nolan</Text>
            <Text style={styles.casting}>Writers</Text>
            <Text style={styles.castingName} numberOfLines={1}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
            <Text style={styles.casting}>Stars</Text>
            <Text style={styles.castingName} numberOfLines={1}>
              Matthew McConaughey, Anne Hathaway, Jessica Chastain...
            </Text>

            <View style={styles.containersTwo}>
              <Text style={styles.top}>More like this</Text>
              <Text style={styles.seeAll}>SEE ALL</Text>
            </View>

            <ScrollView horizontal={true}>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require('../IMDB/ios/Images/forestgump.png')}
                  />
                  <View style={styles.actorName}>
                    <Text style={styles.textWhite}>Forest Gump</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require('../IMDB/ios/Images/dark.png')}
                  />
                  <View style={styles.actorName}>
                    <Text style={styles.textWhite}>The Dark Knight</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require('../IMDB/ios/Images/inception.png')}
                  />
                  <View style={styles.actorName}>
                    <Text style={styles.textWhite}>Inception</Text>
                  </View>
                </View>
              </View>
              <View style={styles.actorList}>
                <View style={styles.actorInfo}>
                  <Image
                    style={styles.actorImage}
                    source={require('../IMDB/ios/Images/Matrix.png')}
                  />
                  <View style={styles.actorName}>
                    <Text style={styles.textWhite}>Matrix</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  global: {
    justifyContent: 'flex-start',
    backgroundColor: '#212121',
    paddingTop: 35,
    width: '100%',
    height: '100%',
  },

  logoContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#4d4d4d',
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  container: {
    backgroundColor: '#1a1a1a',
    width: '100%',
    marginBottom: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'left',
    margin: 10,
    color: '#ffffff',
  },
  movie: {
    flexDirection: 'row',
    width: 200,
  },
  moviePoster: {
    width: 100,
    height: 150,
    marginLeft: 10,
  },

  movieP: {
    flexDirection: 'column',
    marginLeft: 40,
  },
  instructions: {
    textAlign: 'left',
    color: '#ffffff',
    marginBottom: 5,
  },

  //BUTTON ADD LIST
  button: {
    width: '100%',
    marginRight: 10,
    marginLeft: 0,
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: '#0099ff',
    borderRadius: 4,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  star: {
    height: 25,
    width: 25,
    paddingTop: 5,
  },

  starNotes: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },

  textWhite: {
    color: '#ffffff',
    fontSize: 12,
    marginBottom: 3,
  },
  textGrey: {
    color: '#bfbfbf',
    fontSize: 10,
    marginBottom: 3,
  },

  metascore: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    height: 27,
    width: 30,
  },

  //SECOND BOX
  container2: {
    backgroundColor: '#212121',
    marginTop: 10,
    marginBottom: 12,
    flexDirection: 'row',
  },

  top: {
    flex: 1,
    fontSize: 18,
    textAlign: 'left',
    color: '#ffffff',
    marginLeft: 5,
  },
  seeAll: {
    color: '#0099ff',
    textAlign: 'right',
    marginRight: 10,
    marginTop: 5,
  },
  actors: {
    textAlign: 'center',
    paddingLeft: 10,
    marginBottom: 10,
  },
  casting: {
    color: '#e6e6e6',
    fontSize: 12,
    marginBottom: 2,
    marginLeft: 10,
  },
  castingName: {
    color: '#ffffff',
    fontSize: 13,
    marginBottom: 10,
    marginLeft: 10,
  },

  actorImage: {
    width: 150,
    height: 180,
    marginBottom: 10,
  },
  actorList: {
    flexDirection: 'row',
  },
  actorInfo: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    backgroundColor: '#2A2A2A',
  },
})
