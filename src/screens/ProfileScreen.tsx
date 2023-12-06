import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomIcon from '../components/CustomIcon';
import ListItem from '../components/ListItem';
import {COLORS, FONTFAMILY, responsiveSize} from '../theme/theme';

const ListData = [
  {
    image: require('../assets/images/badgeimage.png'),
    title: 'First Stripe Earned',
    description: 'Top 10% of highest spending players in a month',
    special: 'x 3',
  },
  {
    image: require('../assets/images/badgeimage.png'),
    title: 'Born Winner',
    description: 'Top 10% of highest spending players in a month',
    special: '',
  },
  {
    image: require('../assets/images/badgeimage.png'),
    title: 'Trader of the Month',
    description: 'Won 7 under-over games in a row',
    special: '',
  },
  {
    image: require('../assets/images/badgeimage.png'),
    title: 'Rising Star',
    description: 'Top 10% of highest spending players in a month',
    special: '',
  },
  {
    image: require('../assets/images/badgeimage.png'),
    title: 'Jackpot',
    description: 'Top 10% of highest spending players in a month',
    special: '',
  },
  {
    image: require('../assets/images/badgeimage.png'),
    title: 'Impossible',
    description: 'Top 10% of highest spending players in a month',
    special: '',
  },
  {
    image: require('../assets/images/badgeimage.png'),
    title: 'First Stripe Earned',
    description: 'Top 10% of highest spending players in a month',
    special: '',
  },
];

const ProfileScreen = () => {
  const [activeBar, setActiveBar] = useState('Badges');
  return (
    <ScrollView
      contentContainerStyle={styles.ScrollContainer}
      overScrollMode="never"
      bounces={false}>
      <StatusBar backgroundColor={COLORS.whiteBG} barStyle={'dark-content'} />
      <View style={styles.ProfileHeader}>
        <Image
          source={require('../assets/images/profilelogo.png')}
          style={styles.ProfileLogo}
        />
        <Text style={styles.HeaderTitle}>Profile</Text>
        <View
          style={{
            height: responsiveSize(30),
            justifyContent: 'flex-end',
            paddingRight: responsiveSize(8),
          }}>
          <Text
            style={{
              height: responsiveSize(16),
              width: responsiveSize(16),
              padding: responsiveSize(1),
              borderRadius: responsiveSize(30),
              position: 'absolute',
              zIndex: 100,
              left: '70%',
              top: '-10%',
              color: COLORS.whiteBG,
              fontFamily: FONTFAMILY.Montserrat_regular,
              fontSize: responsiveSize(11),
              backgroundColor: COLORS.purple,
              // alignItems: 'center',
              // justifyContent: 'center',
              textAlign: 'center',
            }}>
            1
          </Text>
          <CustomIcon
            name="message"
            color={COLORS.lightGrey}
            size={responsiveSize(24)}
          />
        </View>
      </View>

      <View style={styles.ProfileCard}>
        <View>
          <Image source={require('../assets/images/avatar.png')} />
          <View
            style={{
              position: 'absolute',
              borderColor: COLORS.strokeColor,
              top: '60%',
              left: '13%',
              height: responsiveSize(24),
              width: responsiveSize(24),
              alignItems: 'center',
              justifyContent: 'center',
              // padding: responsiveSize(5),
              borderRadius: 20,
              backgroundColor: COLORS.whiteBG,
              borderWidth: 1,
            }}>
            <CustomIcon
              name="edit"
              color={COLORS.lightGrey}
              size={responsiveSize(11)}
            />
          </View>
        </View>

        <Text style={styles.Text1}>Jina Simons</Text>
        <Text style={[styles.Text2, {fontSize: responsiveSize(12)}]}>
          6000 Pts
        </Text>
        <Text style={[styles.Text2, {lineHeight: responsiveSize(20)}]}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>

        <View
          style={{
            flexDirection: 'row',
            gap: responsiveSize(8),
            marginTop: responsiveSize(10),
          }}>
          <CustomIcon
            name="logout"
            color={COLORS.lightGrey}
            size={responsiveSize(20)}
          />
          <Text style={styles.Text2}>Logout</Text>
        </View>
      </View>

      <View
        style={{
          marginTop: responsiveSize(40),
          flexDirection: 'row',
          marginHorizontal: responsiveSize(16),
          padding: responsiveSize(20),
          borderWidth: 1,
          borderColor: COLORS.strokeColor,
          borderRadius: responsiveSize(5),
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/images/profilebadge.png')}
          style={{
            position: 'absolute',
            top: responsiveSize(-15),
            height: responsiveSize(30),
          }}
        />
        <View style={{flex: 1, gap: responsiveSize(14)}}>
          <Text style={styles.Text3}>Under or Over</Text>
          <View style={{flexDirection: 'row', gap: responsiveSize(12)}}>
            <View
              style={[
                styles.ArrowContainer,
                {backgroundColor: COLORS.rgbaGreen},
              ]}>
              <CustomIcon
                name="lineup"
                color={COLORS.green}
                size={responsiveSize(15)}
              />
            </View>
            <Text style={styles.PercentageText}>81%</Text>
          </View>
        </View>
        <View style={{flex: 1, gap: responsiveSize(14)}}>
          <Text style={styles.Text3}>Top 5</Text>
          <View style={{flexDirection: 'row', gap: responsiveSize(12)}}>
            <View
              style={[
                styles.ArrowContainer,
                {backgroundColor: COLORS.rgbaRed},
              ]}>
              <CustomIcon
                name="linedown"
                color={COLORS.red}
                size={responsiveSize(20)}
              />
            </View>
            <Text style={styles.PercentageText}>-51%</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: responsiveSize(28),
          backgroundColor: COLORS.secondaryBG,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            height: responsiveSize(64),
            marginTop: responsiveSize(4),
          }}>
          <Pressable
            onPress={() => setActiveBar('Games Played')}
            style={[
              {
                flex: 1,
                backgroundColor: COLORS.whiteBG,
                borderBottomColor: COLORS.whiteBG,
                borderBottomWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
              },
              activeBar == 'Games Played' && {
                borderBottomColor: COLORS.purple,
                borderBottomWidth: 2,
              },
            ]}>
            <Text
              style={[
                {
                  fontFamily: FONTFAMILY.Montserrat_medium,
                  fontSize: responsiveSize(14),
                  color: COLORS.lightGrey,
                },
                activeBar == 'Games Played' && {
                  color: COLORS.purple,
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                },
              ]}>
              Games Played
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveBar('Badges')}
            style={[
              {
                flex: 1,
                backgroundColor: COLORS.whiteBG,
                borderBottomColor: COLORS.whiteBG,
                borderBottomWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
              },
              activeBar == 'Badges' && {
                borderBottomColor: COLORS.purple,
                borderBottomWidth: 2,
              },
            ]}>
            <Text
              style={[
                {
                  fontFamily: FONTFAMILY.Montserrat_medium,
                  fontSize: responsiveSize(14),
                  color: COLORS.lightGrey,
                },
                activeBar == 'Badges' && {
                  color: COLORS.purple,
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                },
              ]}>
              Badges
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            gap: responsiveSize(16),
            paddingVertical: responsiveSize(16),
          }}>
          {ListData.map((data, index) => (
            <ListItem
              key={index.toString()}
              image={data.image}
              title={data.title}
              description={data.description}
              special={data.special}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  ScrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.whiteBG,
  },
  ProfileHeader: {
    paddingHorizontal: responsiveSize(16),
    paddingVertical: responsiveSize(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ProfileLogo: {
    height: responsiveSize(30),
    width: responsiveSize(30),
  },
  ProfileCard: {
    alignItems: 'center',
    gap: responsiveSize(10),
    paddingHorizontal: responsiveSize(16),
  },
  HeaderTitle: {
    fontFamily: FONTFAMILY.Montserrat_medium,
    color: COLORS.lightGrey,
    fontSize: responsiveSize(14),
  },
  Text1: {
    fontFamily: FONTFAMILY.Montserrat_medium,
    color: COLORS.primaryBlack,
    fontSize: responsiveSize(14),
  },
  Text2: {
    fontFamily: FONTFAMILY.Montserrat_medium,
    color: COLORS.secondaryBlack,
    fontSize: responsiveSize(14),
  },
  Text3: {
    fontFamily: FONTFAMILY.Montserrat_semibold,
    color: COLORS.secondaryBlack,
    fontSize: responsiveSize(14),
  },
  ArrowContainer: {
    height: responsiveSize(30),
    width: responsiveSize(30),
    borderRadius: responsiveSize(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  PercentageText: {
    fontFamily: FONTFAMILY.Montserrat_bold,
    color: COLORS.secondaryBlack,
    fontSize: responsiveSize(24),
  },
});
