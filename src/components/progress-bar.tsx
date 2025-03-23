import * as Progress from 'react-native-progress';
import { colors } from '@/constants/colors';

export default function ProgressBar(){
    return (
          <Progress.Bar 
            progress={0.3} 
            width={200} 
            height={16} 
            color={colors.green}  
            borderWidth={0} 
            unfilledColor={colors.gray}
            borderRadius={20}  
          />
    );
}
