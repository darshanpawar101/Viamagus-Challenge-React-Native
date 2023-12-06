import BottomSheet from '@gorhom/bottom-sheet';
import {BlurView} from '@react-native-community/blur';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomIcon from '../components/CustomIcon';
import SVGCoin from '../components/SvgCoin';
import {COLORS, FONTFAMILY, responsiveSize} from '../theme/theme';

const Numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const HomeScreen = ({navigation}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNumber, setActiveNumber] = useState<number | null>(null);
  const snapPoints = useMemo(() => ['55%'], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = () => {
    setIsOpen(true);
    bottomSheetRef.current?.snapToIndex(0);
  };
  const handleClosePress = () => {
    setIsOpen(false);
    bottomSheetRef.current?.close();
  };
  useEffect(() => {
    handleClosePress();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.whiteBG}}>
      <Text
        style={{
          fontFamily: FONTFAMILY.AvenirNext_bold,
          fontSize: responsiveSize(16),
          color: COLORS.primaryBlack,
          marginHorizontal: responsiveSize(16),
          marginVertical: responsiveSize(16),
        }}>
        Today's Games
      </Text>

      <View
        style={{
          marginHorizontal: responsiveSize(16),
          elevation: 4,
          shadowColor: 'rgba(0,0,0,1)',
          overflow: 'hidden',
          borderRadius: responsiveSize(5),
        }}>
        <View
          style={{
            gap: responsiveSize(16),
            backgroundColor: COLORS.purple,
            padding: responsiveSize(16),
            overflow: 'hidden',
          }}>
          <Image
            style={{
              position: 'absolute',
              bottom: 0,
              right: -65,
              height: responsiveSize(60),
              resizeMode: 'contain',
              aspectRatio: 253 / 144,
            }}
            source={require('../assets/images/patternbg.png')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveSize(8),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  color: COLORS.lightPink,
                  fontSize: responsiveSize(12),
                }}>
                UNDER OR OVER
              </Text>
              <CustomIcon
                name="info"
                color={COLORS.lightPink}
                size={responsiveSize(15)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveSize(8),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  color: COLORS.lightestPink,
                  fontSize: responsiveSize(12),
                }}>
                Starting in
              </Text>
              <CustomIcon
                name="clock"
                color={COLORS.lightestPink}
                size={responsiveSize(15)}
              />
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  color: COLORS.lightestPink,
                  fontSize: responsiveSize(14),
                }}>
                03:23:12
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_medium,
                fontSize: responsiveSize(15),
                color: COLORS.lightPink,
              }}>
              Bitcoin price will be under
            </Text>
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_medium,
                fontSize: responsiveSize(15),
                color: COLORS.whiteBG,
              }}>
              <Text style={{fontFamily: FONTFAMILY.Montserrat_bold}}>
                $24,524
              </Text>{' '}
              at 7 a ET on 22nd Jan’21
            </Text>
          </View>
        </View>
        {/* 2nd View */}
        <View
          style={{
            backgroundColor: COLORS.whiteBG,
            paddingHorizontal: responsiveSize(15),
            paddingVertical: responsiveSize(20),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{gap: responsiveSize(8)}}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_medium,
                  fontSize: responsiveSize(12),
                  color: COLORS.lightGrey,
                  textTransform: 'uppercase',
                }}>
                Prize Pool
              </Text>
              <Text
                style={{
                  fontFamily: FONTFAMILY.AvenirNext_bold,
                  fontSize: responsiveSize(14),
                  color: COLORS.primaryBlack,
                  textTransform: 'uppercase',
                }}>
                $12,000
              </Text>
            </View>
            <View style={{gap: responsiveSize(8)}}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_medium,
                  fontSize: responsiveSize(12),
                  color: COLORS.lightGrey,
                  textTransform: 'uppercase',
                }}>
                Under
              </Text>
              <Text
                style={{
                  fontFamily: FONTFAMILY.AvenirNext_bold,
                  fontSize: responsiveSize(14),
                  color: COLORS.primaryBlack,
                  textTransform: 'uppercase',
                }}>
                3.25x
              </Text>
            </View>
            <View style={{gap: responsiveSize(8)}}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_medium,
                  fontSize: responsiveSize(12),
                  color: COLORS.lightGrey,
                  textTransform: 'uppercase',
                }}>
                Over
              </Text>
              <Text
                style={{
                  fontFamily: FONTFAMILY.AvenirNext_bold,
                  fontSize: responsiveSize(14),
                  color: COLORS.primaryBlack,
                  textTransform: 'uppercase',
                }}>
                1.25x
              </Text>
            </View>
            <View style={{gap: responsiveSize(8)}}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_medium,
                  fontSize: responsiveSize(12),
                  color: COLORS.lightGrey,
                  textTransform: 'uppercase',
                }}>
                Entry fees
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: responsiveSize(8),
                  justifyContent: 'flex-end',
                }}>
                <Text
                  style={{
                    fontFamily: FONTFAMILY.AvenirNext_bold,
                    fontSize: responsiveSize(14),
                    color: COLORS.primaryBlack,
                    textTransform: 'uppercase',
                  }}>
                  5
                </Text>
                <SVGCoin />
              </View>
            </View>
          </View>
          <View
            style={{
              gap: responsiveSize(16),
              paddingTop: responsiveSize(20),
            }}>
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_semibold,
                fontSize: responsiveSize(14),
                color: COLORS.secondaryBlack,
              }}>
              What’s your prediction?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveSize(16),
                height: responsiveSize(40),
              }}>
              <Pressable
                onPress={() => {
                  handleOpenPress();
                }}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  gap: responsiveSize(5),
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.darkPurple,
                  borderRadius: 50,
                }}>
                <CustomIcon
                  name="fill_up"
                  color={COLORS.whiteBG}
                  size={responsiveSize(11)}
                />
                <Text
                  style={{
                    fontFamily: FONTFAMILY.Montserrat_semibold,
                    fontSize: responsiveSize(14),
                    color: COLORS.whiteBG,
                  }}>
                  Under
                </Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.push('Predict')}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  gap: responsiveSize(5),
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.purple,
                  borderRadius: 50,
                }}>
                <CustomIcon
                  name="fill_down"
                  color={COLORS.whiteBG}
                  size={responsiveSize(11)}
                />
                <Text
                  style={{
                    fontFamily: FONTFAMILY.Montserrat_semibold,
                    fontSize: responsiveSize(14),
                    color: COLORS.whiteBG,
                  }}>
                  Over
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/* 3rd View */}
        <View
          style={{
            paddingVertical: responsiveSize(20),
            paddingHorizontal: responsiveSize(16),
            gap: responsiveSize(12),
            backgroundColor: COLORS.secondayGrey,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveSize(8),
                alignItems: 'center',
              }}>
              <CustomIcon
                name="user"
                size={responsiveSize(13)}
                color={COLORS.secondaryBlack}
              />
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  fontSize: responsiveSize(14),
                  color: COLORS.secondaryBlack,
                }}>
                355 Players
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveSize(8),
                alignItems: 'center',
              }}>
              <CustomIcon
                name="linegraph"
                size={responsiveSize(13)}
                color={COLORS.secondaryBlack}
              />
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  fontSize: responsiveSize(14),
                  color: COLORS.secondaryBlack,
                }}>
                View chart
              </Text>
            </View>
          </View>
          <View
            style={{
              height: responsiveSize(10),
              borderRadius: 20,
              backgroundColor: COLORS.successBlue,
              width: '100%',
            }}>
            <View
              style={{
                height: responsiveSize(10),
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: COLORS.failuerPink,
                width: `${(232 / 355) * 100}%`,
              }}></View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_medium,
                fontSize: responsiveSize(12),
                color: COLORS.lightGrey,
              }}>
              232 predicted under
            </Text>
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_medium,
                fontSize: responsiveSize(12),
                color: COLORS.lightGrey,
              }}>
              123 predicted over
            </Text>
          </View>
        </View>
      </View>
      {isOpen && (
        <BlurView
          blurAmount={1}
          style={{
            // zIndex: 1,
            flex: 1,
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
        />
      )}
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={-1}>
        <View style={{flex: 1, padding: responsiveSize(16)}}>
          <Text
            style={{
              fontFamily: FONTFAMILY.Montserrat_semibold,
              fontSize: responsiveSize(16),
              color: COLORS.primaryBlack,
              marginBottom: responsiveSize(20),
            }}>
            Your Prediction is Under
          </Text>
          <Text
            style={{
              fontFamily: FONTFAMILY.Montserrat_semibold,
              fontSize: responsiveSize(12),
              color: COLORS.secondaryBlack,
              textTransform: 'uppercase',
            }}>
            Entry Tickets
          </Text>
          <ScrollView
            overScrollMode="never"
            bounces={false}
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            {Numbers.map(data => (
              <Pressable
                onPress={() => setActiveNumber(data)}
                key={data}
                style={[
                  {
                    height: responsiveSize(36),
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                  activeNumber == data && {
                    backgroundColor: COLORS.rgbaPurple10,
                  },
                ]}>
                <Text
                  style={[
                    {
                      fontFamily: FONTFAMILY.Montserrat_semibold,
                      fontSize: responsiveSize(24),
                      color: 'rgba(51, 51, 51,0.5)',
                    },
                    activeNumber == data && {color: 'rgba(51, 51, 51, 1)'},
                  ]}>
                  {data}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
          <Text
            style={{
              fontFamily: FONTFAMILY.Montserrat_medium,
              fontSize: responsiveSize(12),
              color: COLORS.lightGrey,
            }}>
            You can win
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_semibold,
                fontSize: responsiveSize(15),
                color: COLORS.lightGreen,
              }}>
              $2000
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: responsiveSize(8),
              }}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_medium,
                  fontSize: responsiveSize(12),
                  color: COLORS.secondaryBlack,
                }}>
                Total
              </Text>
              <SVGCoin />
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  fontSize: responsiveSize(14),
                  color: COLORS.primaryBlack,
                }}>
                5
              </Text>
            </View>
          </View>
          <Pressable
            onPress={() => handleClosePress()}
            style={{
              backgroundColor: COLORS.purple,
              height: responsiveSize(40),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
              marginTop: responsiveSize(20),
            }}>
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_semibold,
                fontSize: responsiveSize(14),
                color: COLORS.whiteBG,
              }}>
              Submit my prediction
            </Text>
          </Pressable>
        </View>
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
