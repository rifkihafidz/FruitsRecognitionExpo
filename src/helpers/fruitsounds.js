import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { Audio } from 'expo-av';

export const benefitSound = async (presentedFruit) => {
  const [soundBenefit, setSoundBenefit] = useState(null);
  if (presentedFruit === 'Apel') {
    sounds = await Audio.Sound.createAsync(require('../sounds/1.Apel.mp3'));
    setSoundBenefit(sounds);
    return <TouchableOpacity>
      <Text>Apel</Text>
    </TouchableOpacity>
  } else if (presentedFruit === 'Buah Naga') {
    sounds = await Audio.Sound.createAsync(require('../sounds/2.BuahNaga.mp3'));
    setSoundBenefit(sounds);
    return <TouchableOpacity>
      <Text>Buah Naga</Text>
    </TouchableOpacity>
  } else if (presentedFruit === 'Jeruk') {
    sounds = await Audio.Sound.createAsync(require('../sounds/3.Jeruk.mp3'));
    setSoundBenefit(sounds);
    return <TouchableOpacity>
      <Text>Apel</Text>
    </TouchableOpacity>
  } else if (presentedFruit === 'Lemon') {
    sounds = await Audio.Sound.createAsync(require('../sounds/4.Lemon.mp3'));
    setSoundBenefit(sounds);
    return <TouchableOpacity>
      <Text>Apel</Text>
    </TouchableOpacity>
  } else if (presentedFruit === 'Nanas') {
    sounds = await Audio.Sound.createAsync(require('../sounds/5.Nanas.mp3'));
    setSoundBenefit(sounds);
    return <TouchableOpacity>
      <Text>Apel</Text>
    </TouchableOpacity>
  } else if (presentedFruit === 'Pir') {
    sounds = await Audio.Sound.createAsync(require('../sounds/6.Pir.mp3'));
    setSoundBenefit(sounds);
    return <TouchableOpacity>
      <Text>Apel</Text>
    </TouchableOpacity>
  } else if (presentedFruit === 'Pisang') {
    sounds = await Audio.Sound.createAsync(require('../sounds/7.Pisang.mp3'));
    setSoundBenefit(sounds);
    return <TouchableOpacity>
      <Text>Apel</Text>
    </TouchableOpacity>
  } else if (presentedFruit === 'Salak') {
    sounds = await Audio.Sound.createAsync(require('../sounds/8.Salak.mp3'));
    setSoundBenefit(sounds);
    return <TouchableOpacity>
      <Text>Apel</Text>
    </TouchableOpacity>
  } else if (presentedFruit === 'Semangka') {
    sounds = await Audio.Sound.createAsync(require('../sounds/9.Semangka.mp3'));
    setSoundBenefit(sounds);
    return <TouchableOpacity>
      <Text>Apel</Text>
    </TouchableOpacity>
  } else if (presentedFruit === 'Tomat') {
    sounds = await Audio.Sound.createAsync(require('../sounds/10.Tomat.mp3'));
    setSoundBenefit(sounds);
    return <TouchableOpacity>
      <Text>Apel</Text>
    </TouchableOpacity>
  }
}