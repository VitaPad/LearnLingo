import { ref, get, update, remove, getDatabase } from 'firebase/database';
import { database } from '../firebaseConfig';

// Додати викладача
/* export function addTeacher(teacherId, teacherData) {
  set(ref(database, 'teachers/' + teacherId), teacherData);
}
 */
// Отримати всі дані викладачів
export async function getTeachers() {
  const snapshot = await get(ref(database, 'teachers'));
  if (snapshot.exists()) {
    const data = snapshot.val();
    console.log('Teachers data:', data);
    return data;
  } else {
    console.log('No data available');
    return []; // Возвращаем пустой массив
  }
}

export async function fetchTeacherDataFromRealtimeDatabase(teacherId) {
  const db = getDatabase();
  const teacherRef = ref(db, `teachers/${teacherId}`);
  const snapshot = await get(teacherRef);

  if (snapshot.exists()) {
    return snapshot.val(); // Повертає об'єкт даних про вчителя
  } else {
    console.log('Дані про вчителя не знайдено');
    return null;
  }
}

// Оновити дані викладача
export function updateTeacher(teacherId, newData) {
  update(ref(database, 'teachers/' + teacherId), newData);
}

// Видалити викладача
export function deleteTeacher(teacherId) {
  remove(ref(database, 'teachers/' + teacherId));
}
