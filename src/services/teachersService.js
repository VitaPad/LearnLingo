import { ref, get, update, getDatabase } from 'firebase/database';
import { database } from '../firebaseConfig';

export async function getTeachers() {
  const snapshot = await get(ref(database, 'teachers'));
  if (snapshot.exists()) {
    const data = snapshot.val();

    return data;
  } else {
    console.log('No data available');
    return [];
  }
}

export async function fetchTeacherDataFromRealtimeDatabase(teacherId) {
  const db = getDatabase();
  const teacherRef = ref(db, `teachers/${teacherId}`);
  const snapshot = await get(teacherRef);

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log('Дані про вчителя не знайдено');
    return null;
  }
}

export function updateTeacher(teacherId, newData) {
  update(ref(database, 'teachers/' + teacherId), newData);
}

// Видалити викладача
/* export function deleteTeacher(teacherId) {
  remove(ref(database, 'teachers/' + teacherId));
} */
