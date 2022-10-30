import { View, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import {SearchComponent, UserComponent} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {getUsers} from '../Redux/Slices/mainSlice'

const Main = () => {
  const [searchquery, setsearchquery] = useState('');
  const data = useSelector(state => state.main.filteredUsers);
  const loading = useSelector(state => state.main.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers(searchquery));
  }, [searchquery]);
  return (
    <View style={{flex:1}}>
      <SearchComponent value={searchquery} onChangeText={setsearchquery} />
      {loading ? <ActivityIndicator style={{marginTop:20}} size={'large'} color='#D3D3D3' /> : <UserComponent name={data.name} age={data.age} count={data.count} />}
      {/* <View style={styles.list_contain}>
          <FlatList
            contentContainerStyle={styles.flatlist}
            ListEmptyComponent={() => <EmptyList />}
            data={data}
            keyExtractor={item => item.mal_id}
            renderItem={item => (
              <View>
                <Text>{item.item.age}</Text>
              </View>
            )}
          />
        </View> */}
    </View>
  )
}

export {Main};

