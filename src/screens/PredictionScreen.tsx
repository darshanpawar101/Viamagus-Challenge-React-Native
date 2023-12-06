import BottomSheet from '@gorhom/bottom-sheet';
import {BlurView} from '@react-native-community/blur';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CustomIcon from '../components/CustomIcon';
import SVGCoin from '../components/SvgCoin';
import {COLORS, FONTFAMILY, responsiveSize} from '../theme/theme';

const Numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const PredictionScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNumber, setActiveNumber] = useState<number | null>(null);
  const snapPoints = useMemo(() => ['60%'], []);
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
    handleOpenPress();
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
          elevation: 1,
          shadowColor: '#000',
          borderBottomLeftRadius: responsiveSize(10),
          borderBottomRightRadius: responsiveSize(10),
          overflow: 'hidden',
        }}>
        <View
          style={{
            height: responsiveSize(6),
            borderRadius: 20,
            backgroundColor: COLORS.whiteBG,
            width: '100%',
          }}>
          <View
            style={{
              height: responsiveSize(6),
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              backgroundColor: COLORS.lightBlue,
              width: `${(232 / 355) * 100}%`,
            }}></View>
        </View>
        <View
          style={{
            gap: responsiveSize(16),
            backgroundColor: COLORS.whiteBG,
            padding: responsiveSize(16),
            overflow: 'hidden',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontFamily: FONTFAMILY.Montserrat_semibold,
                color: COLORS.secondaryBlack,
                fontSize: responsiveSize(12),
              }}>
              UNDER OR OVER
            </Text>

            <View
              style={{
                flexDirection: 'row',
                gap: responsiveSize(8),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  color: COLORS.lightGrey,
                  fontSize: responsiveSize(12),
                }}>
                Starts in
              </Text>
              <CustomIcon
                name="clock"
                color={COLORS.lightGrey}
                size={responsiveSize(15)}
              />
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  color: COLORS.lightGrey,
                  fontSize: responsiveSize(14),
                }}>
                03:23:12
              </Text>
            </View>
          </View>
          <View style={{gap: responsiveSize(10)}}>
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_semibold,
                fontSize: responsiveSize(16),
                color: COLORS.primaryBlack,
              }}>
              Shifu predicts Bitcoin's value will reach
            </Text>
            <Text
              style={{
                fontFamily: FONTFAMILY.AvenirNext_bold,
                fontSize: responsiveSize(22),
                color: COLORS.primaryBlack,
              }}>
              $24524
            </Text>
          </View>
        </View>
        {/* 2nd View */}

        <View
          style={{
            paddingVertical: responsiveSize(20),
            paddingHorizontal: responsiveSize(16),
            gap: responsiveSize(12),
            backgroundColor: COLORS.whiteBG,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_semibold,
                fontSize: responsiveSize(12),
                color: COLORS.lightGrey,
              }}>
              232 chose under
            </Text>
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_semibold,
                fontSize: responsiveSize(12),
                color: COLORS.lightGrey,
              }}>
              123 chose over
            </Text>
          </View>

          <View
            style={{
              height: responsiveSize(10),
              borderRadius: 20,
              backgroundColor: COLORS.darkBlue,
              width: '100%',
            }}>
            <View
              style={{
                height: responsiveSize(10),
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: COLORS.blue,
                width: `${(232 / 355) * 100}%`,
              }}></View>
          </View>

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
                color={COLORS.lightGrey}
              />
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  fontSize: responsiveSize(14),
                  color: COLORS.secondaryBlack,
                }}>
                355
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
                color={COLORS.lightGrey}
              />
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  fontSize: responsiveSize(14),
                  color: COLORS.secondaryBlack,
                }}>
                View chart
              </Text>
              <CustomIcon
                name="arrow_down"
                size={responsiveSize(13)}
                color={COLORS.lightGrey}
              />
            </View>
          </View>
        </View>
        {/* 3rd View */}
        <ImageBackground
          source={require('../assets/images/pattern.png')}
          style={{
            backgroundColor: COLORS.secondaryBlue,
            paddingHorizontal: responsiveSize(15),
            paddingVertical: responsiveSize(20),
            gap: responsiveSize(20),
          }}>
          <Text
            style={{
              fontFamily: FONTFAMILY.Montserrat_medium,
              fontSize: responsiveSize(20),
              color: COLORS.whiteBG,
            }}>
            Place your bet
          </Text>

          <Text
            style={{
              fontFamily: FONTFAMILY.Montserrat_semibold,
              fontSize: responsiveSize(14),
              color: '#f1f4f9',
            }}>
            Prize Pool{'  '}
            <Text
              style={{
                fontFamily: FONTFAMILY.Montserrat_bold,
                fontSize: responsiveSize(16),
                color: '#ffcd4d',
              }}>
              $12,000
            </Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: responsiveSize(16),
              height: responsiveSize(40),
            }}>
            <Pressable
              style={{
                flex: 1,
                flexDirection: 'row',
                gap: responsiveSize(5),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.whiteBG,
                borderRadius: 50,
              }}>
              <CustomIcon
                name="fill_up"
                color={COLORS.secondaryBlue}
                size={responsiveSize(11)}
              />
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  fontSize: responsiveSize(14),
                  color: COLORS.secondaryBlue,
                }}>
                Under
              </Text>
            </Pressable>

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
                backgroundColor: COLORS.whiteBG,
                borderRadius: 50,
              }}>
              <CustomIcon
                name="fill_down"
                color={COLORS.secondaryBlue}
                size={responsiveSize(11)}
              />
              <Text
                style={{
                  fontFamily: FONTFAMILY.Montserrat_semibold,
                  fontSize: responsiveSize(14),
                  color: COLORS.secondaryBlue,
                }}>
                Over
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      {isOpen && (
        <BlurView
          blurAmount={1}
          style={{
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
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View
          style={{
            flex: 1,
            padding: responsiveSize(16),
            // backgroundColor: 'red',
          }}>
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
                      color: 'rgba(51, 51, 51,0.7)',
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
              marginVertical: responsiveSize(20),
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

export default PredictionScreen;

const styles = StyleSheet.create({
  ScrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.whiteBG,
  },
});
